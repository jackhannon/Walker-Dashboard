import { create } from 'zustand';
import { Agent, Frame, RawFrame, Terrain } from '../types';
import { processFrame } from './utils/processFrame';
import { getAgents } from './services/services';
import { io, Socket } from 'socket.io-client';




type State = {
  agents: Agent[];
  activeAgentIndex: number;
  frame: Frame | null;
  terrain: Terrain | null;
  isConnected: boolean;
  changeActiveAgent: (index: number) => void;
  error: string | null,
  activeTreePath: {perceptorIndex: number, skillIndex: number}
};


let socket: Socket;

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
        perceptorIndex = Math.floor(Math.random()*3);
      }
      while (skillIndex === activeTreePath.skillIndex) {
        skillIndex = Math.floor(Math.random()*3);
      }
      set({ activeTreePath: {perceptorIndex, skillIndex}});
    }, 5000)
  }

  
  function onFrameGet(frame: RawFrame) {
    //we only sure we are connected and working once frames start coming though!
    set({isConnected: true})
    set({ frame: processFrame(frame) });
    resetTimeout();
  }

  function onTerrainGet(terrain: Terrain) {
    set({ terrain: terrain });
    resetTimeout();
  }

  function changeActiveAgent(index: number) {
    set({ activeAgentIndex: index });
    const { agents } = get();
    socket.emit("agent", {name: agents[0].name, id: agents[0].id})
  }

  async function initializeAPI() {
    try {
      const agents = await getAgents();
      const {activeAgentIndex} = get()
      set({ agents: agents });

      const connectSocket = new Promise<void>((resolve, reject) => {
        socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:4000');
  
        socket.on('connect', () => {
          console.log('Socket connected');
          resolve();
        });
  
        socket.on('connect_error', (error) => {
          console.error('Socket connection error:', error);
          reject(error);
        });
  
        socket.on('disconnect', () => {
          console.log('Socket disconnected');
          set({error: "Disconnected from socket"});
        });

        socket.on('frame', onFrameGet);
        socket.on('terrain', onTerrainGet);

        socket.emit("agent", agents[activeAgentIndex].id)
      });
      await connectSocket;
      changeActiveTreePath();
    } catch (error) {
      console.error('Failed to initialize API', error);
      set({error: "Failed to connect"});
    } 
  }

  initializeAPI()

  return {
    agents: [],
    activeAgentIndex: 0,
    frame: null,
    terrain: null,
    isConnected: false,
    changeActiveAgent,
    onFrameGet,
    activeTreePath: {perceptorIndex: 0, skillIndex: 0},
    error: null
  };
});
