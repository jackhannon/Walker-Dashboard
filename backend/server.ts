import express, { Express } from "express";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHander.js";
import cors from 'cors'
import { credentials } from "./middleware/credentials.js";
import { corsOptions } from "./config/corsOptions.js";
import envConfig from "./config/envConfig.js";
import socketConfig from "./config/socketConfig.js";


async function startServer() {
  const PORT = Number(envConfig.PORT) || 3000;

  const app: Express = express();
  socketConfig()

  app.use(credentials);
  app.use(cors(corsOptions));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  // app.use("/", robotRoutes)

  app.get("/", (req, res) => {
    res.send("Hello, this is the root endpoint!");
  });
  
  app.use(errorHandler);
  app.use(notFound);
  
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
  })
}

startServer()