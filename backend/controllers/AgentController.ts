import { NextFunction, Request, Response } from "express"
import makeQuery from "../utils/makeQuery"

type RawFrame = {
  "Hull angle": number,
  "Hull angular speed": number,
  "Hull horizontal speed": number,
  "Hull vertical speed": number,
  "Hip 1 angle": number,
  "Knee 1 angle": number,
  "Leg 1 ground contact": number,
  "Hip 2 angle": number,
  "Knee 2 angle": number,
  "Leg 2 ground contact": number,
  "Hull position": [number, number],
  "Leg 1 position": [number, number],
  "Leg 2 position": [number, number],
  "Leg 3 position": [number, number],
  "Leg 4 position": [number, number]
}

async function getAgents(req: Request, res: Response, next: NextFunction) {
  try {
    const GET_AGENT = `
      SELECT * from agent
    `;
    const agents = await makeQuery(GET_AGENT);
    res.send(agents.rows)
  } catch (error) {
    next(error)
  }
}


async function persistAgent(agentName: string, agentDescription: string) {
  try {
    const ADD_AGENT = `
      INSERT INTO agent (agent_name, agent_description)
      ($1, $2)
    `
    await makeQuery(ADD_AGENT, agentName, agentDescription)
  } catch (error) {
    console.log("could not add agent:", error)
  }
}


async function persistAgentData(frames: RawFrame[], agentId: string) {
  function processAgentData(frame: RawFrame): {speed: number, distance: number} {
    return {speed: frame["Hull angular speed"], distance: frame["Hull position"][0]}
  }

  try {
    const processedAgentData = frames.map(processAgentData)

    const ADD_AGENT_DATA = `
      UPDATE agent 
      SET points = $1
      WHERE agent.id = $2
    `
  
    await makeQuery(ADD_AGENT_DATA, processedAgentData, agentId)
  } catch (error) {
    console.log("could not add agent:", error)
  }
}


export { persistAgent, getAgents, persistAgentData}