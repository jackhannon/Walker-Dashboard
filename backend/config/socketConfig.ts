import { Socket } from "socket.io";
import envConfig from "./envConfig.js";
import { corsOptions } from "./corsOptions.js";
import { connectToSocket } from "../services/robotServices";
import { Frame } from '../../types'
import getFrameFromIndex from "../utils/getNextFrame.js";
import { walkData } from "../data/walkData.js";
function socketConfig() {

  const SOCKET_PORT = Number(envConfig.SOCKET_PORT) || 4000;
  const { Server } = require("socket.io");
  const io = new Server({
    cors: {
      origin: corsOptions.origin
    }
  });


  io.on("connection", (socket: Socket) => {

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