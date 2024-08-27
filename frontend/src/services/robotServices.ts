import { io } from 'socket.io-client';

type Params = {
   query: {
    username: string
   }
}

export function connectToSocket(params: Params) {
  console.log()
  return io(import.meta.env.SOCKET_URL || `http://localhost:4000`, params)
}
