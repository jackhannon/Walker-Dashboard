
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
      <InfoTab 
        description={
          "The Agent modules make up the actual agent. Starting at with sensors, then perceptors, then a selection, then skills, we reach a decision for the agents next action"
        }
        />
      {children}
    </div>
  )
}

export default AgentModules