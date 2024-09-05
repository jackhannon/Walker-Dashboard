
import InfoTab from '../../../components/InfoTab/InfoTab';
import DashBoardStyles from '../../../DashBoardStyles.module.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

const AgentModules: React.FC<Props> = ({children}) => {

  return (
    <div className={DashBoardStyles.agentSkillsContainer}>
      <div className={DashBoardStyles.label}>Agent Modules</div>
      <InfoTab />
      {children}
    </div>
  )
}

export default AgentModules