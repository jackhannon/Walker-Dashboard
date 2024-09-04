import Disconnected from "../../../components/Disconnected"
import Spinner from "../../../components/Spinner"
import Environment from "./Environment"
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import { useAgentStore } from "../../../store"

const AgentEnvironment:React.FC = () => {
  const {frame, terrain, error} = useAgentStore(state => {
    return {
      frame: state.frame,
      terrain: state.terrain,
      error: state.error
    }
  });

  return (
    <div className={DashBoardStyles.agentEnvironmentContainer}>
      <div className={DashBoardStyles.label}>Agent Environment</div>
        {error ? (
          <Disconnected message={error} />
        ) : (frame === null || terrain === null) ? (
          <Spinner />
        ) : (     
          <Environment frame={frame} terrain={terrain}/>
        )}
        
    </div>
  )
}

export default AgentEnvironment