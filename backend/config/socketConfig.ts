import { Socket } from "socket.io";
import envConfig from "./envConfig.js";
import { corsOptions } from "./corsOptions.js";

function socketConfig() {
  const SOCKET_PORT = Number(envConfig.SOCKET_PORT) || 4000;
  const { Server } = require("socket.io");
  const io = new Server({
    cors: {
      origin: corsOptions.origin
    }
  });

  let frameProvider: Socket | null = null;

  io.on("connection", (socket: Socket) => {
    const role = socket.handshake.query.role;

    if (role === "frame-provider") {
      frameProvider = socket;
      console.log("Frame provider connected");
    } else if (role === "client") {
      console.log("Client connected");
      if (frameProvider) {
        frameProvider.emit("terrain");
        frameProvider.emit("start-frame-retrieval");

        frameProvider.on("frame", (frame) => {
          socket.emit("frame", frame);
        });

        frameProvider.on("terrain", (frame) => {
          socket.emit("terrain", frame);
        });
      } else {
        console.log("No frame provider connected!");
      }
    }

    socket.on('disconnect', () => {
      if (socket === frameProvider) {
        console.log("Frame provider disconnected");
        frameProvider = null;
      } else {
        frameProvider?.emit("end-frame-retrieval");
        console.log("Client disconnected");
      }
    });
  });

  io.listen(SOCKET_PORT);
}

export default socketConfig;