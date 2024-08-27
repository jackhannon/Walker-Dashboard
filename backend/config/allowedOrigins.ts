import envConfig from "./envConfig.js";

const allowedOrigins = [
  envConfig.CLIENT_DOMAIN,
  'http://127.0.0.1:5500',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5000',
];

export {allowedOrigins}