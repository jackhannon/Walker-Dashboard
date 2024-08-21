import { useEffect, useState } from 'react'
import { Frame } from '../types'
import { connectToSocket } from '../services/robotServices';
import normalizeFrame from '../utils/normalizeFrame';




const useGetFrame = (): [Frame, boolean] => {
  
  const [isConnected, setIsConnected] = useState(false);
  const [frame, setFrame] = useState<Frame | null>(null);

  useEffect(() => {
    const socket = connectToSocket({
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

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('frame', onFrameGet);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('frame', onFrameGet);
    };
  }, []);


  return [frame as Frame, isConnected];
}

export default useGetFrame