
import InfoTab from '../../../components/InfoTab/InfoTab';
import Spinner from '../../../components/Spinner';
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import { ReactNode } from "react";

type Props = {
  isLoading: boolean;
  children: ReactNode;
}

const AgentModules: React.FC<Props> = ({isLoading, children}) => {
  return (
    <div className={DashBoardStyles.agentSkillsContainer}>
      <div className={DashBoardStyles.label}>Agent Modules</div>
      <InfoTab />
      {isLoading ? (
        <Spinner/>
      ) : (
        children
      )}
    </div>
  )
}

export default AgentModules