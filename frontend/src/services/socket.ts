import { io } from 'socket.io-client';

const role = "client"; // or "frame-provider" based on the role

const socket = io(import.meta.env.VITE_API_URL || "http://localhost:4000", {
  query: { role }
});

export { socket };