import { io } from 'socket.io-client';
import envConfig from '../config/envConfig';

type Params = {
  query: {
    username: string
  }
}

export function connectToSocket(params: Params) {
  return io(envConfig.FRAME_SOURCE || "", params)
}
