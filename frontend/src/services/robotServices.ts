import { io } from 'socket.io-client';

type Params = {
  query: {
    username: string
  }
}

export function connectToSocket(params: Params) {
  return io(import.meta.env.VITE_API_URL, params)
}
