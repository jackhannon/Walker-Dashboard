import { useEffect, useRef, useState } from 'react'
import { Frame } from '../types'
import { connectToSocket } from '../services/robotServices';
import normalizeFrame from '../utils/normalizeFrame';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Socket } from 'socket.io-client';




const useGetFrame = (): [Frame, boolean, () => void] => {
  
  const [isConnected, setIsConnected] = useState(false);
  const [frame, setFrame] = useState<Frame | null>(null);
  const socket = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>()
  useEffect(() => {
    socket.current = connectToSocket({
      query: {
        username: "user1"
      }
    });

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFrameGet(frame: Frame) {
      const normalizedFrame = normalizeFrame(frame)
      setFrame(normalizedFrame);
    }


    socket.current.on('connect', onConnect);
    socket.current.on('disconnect', onDisconnect);
    socket.current.on('frame', onFrameGet);

    return () => {
      socket.current?.off('connect', onConnect);
      socket.current?.off('disconnect', onDisconnect);
      socket.current?.off('frame', onFrameGet);
    };
  }, []);

  function reset() {
    socket.current?.emit('reset')
  }

  return [frame as Frame, isConnected, reset];
}

export default useGetFrame