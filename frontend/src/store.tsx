import { create } from 'zustand';
import { RawFrame, Terrain } from '../types';
import { socket } from './services/socket';
import { initialWalkerFrame } from './initialData/InitialWalkerFrame';
import { initialWalkerTerrain } from './initialData/InitialWalkerTerrain';
import { ProcessedFrame, ProcessedNullFrame } from './utils/FrameNormalizationClasses';
import { WalkerNullTerrain, WalkerTerrain } from './utils/TerrainNormalizationClasses';

type Agent = {
  type: string;
  description: string;
};

type State = {
  agents: Agent[];
  activeAgentIndex: number;
  frame: ProcessedFrame | ProcessedNullFrame;
  terrain: WalkerNullTerrain | WalkerTerrain;
  isConnected: boolean;
  changeActiveAgent: (index: number) => void;
  reset: () => void;
};

export const useAgentStore = create<State>((set) => {
  function onFrameGet(frame: RawFrame) {
    set({ frame: new ProcessedFrame(frame) });
  }

  function onTerrainGet(terrain: Terrain) {
    set({ terrain: new WalkerTerrain(terrain) });
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
        description: 'An agent which performs one skill at a time using a selective and perceptive concepts',
      },
      {
        type: 'Network',
        description: 'An agent which uses skills relying on skills to drive a feedback loop',
      },
    ],
    activeAgentIndex: 0,
    frame: initialWalkerFrame,
    terrain: initialWalkerTerrain,
    isConnected: false,
    changeActiveAgent,
    reset,
    onFrameGet,
  };
});
