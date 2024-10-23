import { Socket } from "socket.io";
import envConfig from "./envConfig.js";
import { corsOptions } from "./corsOptions.js";

import getFrameFromIndex from "../utils/getNextFrame.js";
import { walkData } from "../data/walkData.js";
import { terrainData } from "../data/terrainData.js";

function socketConfig() {
  const SOCKET_PORT = 4000;
  const { Server } = require("socket.io");
  const io = new Server({
    cors: {
      origin: corsOptions.origin
    }
  });


  io.on("connection", (socket: Socket) => {
    let intervalId: NodeJS.Timeout;
    console.log("user connected")

    socket.on("agent", (id) => {
      console.log("agent was selected!")
      clearInterval(intervalId)
      socket.emit("terrain", terrainData)
      let index = 0
      intervalId = setInterval(() => {
        socket.emit("frame", getFrameFromIndex(index))
        index+=1;
        if (index > walkData.length-1) {
          index = 0;
        }
      }, 20)
    })
    
    socket.on('disconnect', () => {
      clearInterval(intervalId);
      console.log("a user disconnected");
    })
  });

  io.listen(4000, '0.0.0.0');

}

export default socketConfig