
import InfoTab from '../../../components/InfoTab/InfoTab';
import Spinner from '../../../components/Spinner';
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import AgentSkillTree from './AgentSkillTree';

type Props = {
  isLoading: boolean;
}

const AgentModules: React.FC<Props> = ({isLoading}) => {
  return (
    <div className={DashBoardStyles.agentSkillsContainer}>
      <div className={DashBoardStyles.label}>Agent Modules</div>
      <InfoTab />
      {isLoading ? (
        <Spinner/>
      ) : (
        <AgentSkillTree/>
      )}
    </div>
  )
}

export default AgentModules