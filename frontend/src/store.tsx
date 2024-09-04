import { create } from 'zustand';
import { Frame, RawFrame, Terrain } from '../types';
import { socket } from './services/socket';
import { processFrame } from './utils/processFrame';


type Agent = {
  type: string;
  description: string;
};

type State = {
  agents: Agent[];
  activeAgentIndex: number;
  frame: Frame | null;
  terrain: Terrain | null;
  isConnected: boolean;
  changeActiveAgent: (index: number) => void;
  reset: () => void;
  error: string | null,
  activeTreePath: {perceptorIndex: number, skillIndex: number}
};

export const useAgentStore = create<State>((set, get) => {
  let timeoutId: NodeJS.Timeout;

  function resetTimeout() {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      set({ error: 'Disconnected from socket' });
      set({ isConnected: false });
    }, 10000);
  }

  // purely theatrical effect
  function changeActiveTreePath() {
    setInterval(() => {
      const { activeTreePath } = get();
      let perceptorIndex = Math.floor(Math.random()*3)
      let skillIndex = Math.floor(Math.random()*3)
      while (perceptorIndex === activeTreePath.perceptorIndex) {
        perceptorIndex = Math.floor(Math.random()*3)
        console.log("loop")
      }
      while (skillIndex === activeTreePath.skillIndex) {
        skillIndex = Math.floor(Math.random()*3)
        console.log("loop")
      }
      set({ activeTreePath: {perceptorIndex, skillIndex}})
    }, 5000)
  }

  function onFrameGet(frame: RawFrame) {
    set({ frame: processFrame(frame) });
    resetTimeout()
  }

  function onTerrainGet(terrain: Terrain) {
    set({ terrain: terrain });
    resetTimeout()
  }
  function reset() {
    socket.emit('reset');
  }
  
  function changeActiveAgent(index: number) {
    set({ activeAgentIndex: index });
    reset()
  }

  
  changeActiveTreePath()
  socket.on("frame", onFrameGet)
  socket.on("terrain", onTerrainGet)
 

  return {
    agents: [
      {
        type: 'Tree',
        description: 'An agent which performs one skill at a time using selective and perceptive concepts',
      },
      {
        type: 'Network',
        description: 'An agent which uses skills relying on skills to drive a feedback loop',
      },
    ],
    activeAgentIndex: 0,
    frame: null,
    terrain: null,
    isConnected: false,
    changeActiveAgent,
    reset,
    onFrameGet,
    activeTreePath: {perceptorIndex: 0, skillIndex: 0},
    error: null
  };
});
