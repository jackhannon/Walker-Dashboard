import { Agent } from "../../types";
import makeRequest from "../utils/makeRequests";

export function getAgents(): Promise<Agent[]> {
  return makeRequest('/agents')
}