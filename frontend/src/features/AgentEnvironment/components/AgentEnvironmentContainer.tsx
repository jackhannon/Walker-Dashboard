import Environment from "./Environment"
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import { useAgentStore } from "../../../store"
import { Frame, Terrain } from "../../../../types"

const AgentEnvironment:React.FC = () => {
  const {frame, terrain } = useAgentStore(state => {
    return {
      frame: state.frame,
      terrain: state.terrain,
    }
  });

  return (
    <div className={DashBoardStyles.agentEnvironmentContainer}>
      <div className={DashBoardStyles.label}>Agent Environment</div>
      <Environment frame={frame as Frame} terrain={terrain as Terrain}/> 
    </div>
  )
}

export default  AgentEnvironment