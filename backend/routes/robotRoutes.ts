import express, { IRouter } from "express";
import { getAgents } from "../controllers/AgentController";

const router: IRouter = express.Router();

router.get("/agents", getAgents);

export default router