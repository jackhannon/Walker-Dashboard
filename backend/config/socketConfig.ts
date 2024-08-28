import { Socket } from "socket.io";
import {walkData} from "../data/walkData";
import getFrameFromIndex from "../utils/getNextFrame.js";
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
  
  // const connectedUsers = new Map<string, Socket>();

  io.on("connection", (socket: Socket) => {
    // const username = socket.handshake.query.username as string;
    // console.log(socket.handshake.query.username)
    io.emit("frame", "Im working")

    // if (!username) {
    //   console.log("Connection attempt without username. Rejecting.");
    //   socket.disconnect(true);
    //   return;
    // }

    // if (connectedUsers.has(username)) {
    //   const existingSocket = connectedUsers.get(username);
    //   console.log(`User ${username} already connected. Rejecting new connection.`);
    //   existingSocket?.disconnect(true);
    // }

    // connectedUsers.set(username, socket);

    // console.log(`User ${username} connected with socket id: ${socket.id}`);

    let index = 0

    socket.on('disconnect', () => {
      clearInterval(intervalId);
      index = 0;
      console.log("a user disconnected");
    })

    socket.on('reset', () => {
      index = 0;
      console.log("resetting environment");
    })

    const intervalId = setInterval(() => {
      io.emit("frame", getFrameFromIndex(index))

      index+=1;
      if (index > walkData.length-1) {
        index = 0;
      }
    }, 20)
  });

  io.listen(SOCKET_PORT);
}

export default socketConfig


