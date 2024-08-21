// import makeRequest from "../utils/makeRequests";
import { io } from 'socket.io-client';

export function connectToSocket(params) {
  return io(import.meta.env.SOCKET_URL || `http://localhost:4000`, params)
}

// export function updateRobotParameters(parameters: string) {
//   return makeRequest(`./robot/change?${parameters}`)
// }