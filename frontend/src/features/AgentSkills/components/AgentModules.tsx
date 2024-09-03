
import InfoTab from '../../../components/InfoTab/InfoTab';
import Spinner from '../../../components/Spinner';
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import { useAgentStore } from '../../../store';
import AgentSkillTree from './AgentSkillTree';

type Props = {
  isLoading: boolean;
}

const AgentModules: React.FC<Props> = () => {
  const flowChartData = useAgentStore(state => state.flowChart)

  return (
    <div className={DashBoardStyles.agentSkillsContainer}>
      <div className={DashBoardStyles.label}>Agent Modules</div>
      <InfoTab />
      {flowChartData === null ? (
        <Spinner/>
      ) : (
        <AgentSkillTree flowChart={flowChartData}/>
      )}
    </div>
  )
}

export default AgentModules