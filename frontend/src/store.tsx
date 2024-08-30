import { create } from 'zustand';
import normalizeFrame from './utils/normalizeFrame';
import { Frame, RawFrame, Terrain } from '../types';
import { socket } from './services/socket';

type Agent = {
  type: string;
  description: string;
};

type State = {
  agents: Agent[];
  activeAgentIndex: number;
  frame: Frame;
  terrain: Terrain;
  isConnected: boolean;
  changeActiveAgent: (index: number) => void;
  reset: () => void;

};

export const useAgentStore = create<State>((set) => {

  function onFrameGet(frame: RawFrame) {
    const normalizedFrame = normalizeFrame(frame);
    set({ frame: normalizedFrame });
  }

  function onTerrainGet(terrain: Terrain) {
    set({ terrain });
    
  }

  function reset() {
    socket.emit('reset');
  }
  
  function changeActiveAgent(index: number) {
    set({ activeAgentIndex: index });
    reset()
  }

  socket.on("frame", onFrameGet)
  socket.on("terrain", onTerrainGet)

  return {
    agents: [
      {
        type: 'Tree',
        description: 'Selected is a relatively simple agent which performs one skill at a time using a selective and perceptive concepts',
      },
      {
        type: 'Network',
        description: 'Selected is a network agent which performs uses skill together and uses their feedback',
      },
    ],
    activeAgentIndex: 0,
    frame: {
      hull: {
        angle: 0,
        horizontalVelocity: 0,
        verticalVelocity: 0,
        coordinate: [0, 0],
      },
      leftLeg: {
        hip: {
          angle: 0,
          coordinate: [0, 0]
        },
        knee: {
          angle: 0,
          coordinate: [0, 0]
        },
        isContactingGround: false
      },
      rightLeg: {
        hip: {
          angle: 0,
          coordinate: [0, 0]
        },
        knee: {
          angle: 0,
          coordinate: [0, 0]
        },
        isContactingGround: false
      }
    },
    terrain: [[0, 0]],
    isConnected: false,
    changeActiveAgent,
    reset,
    onFrameGet,
  };
});
