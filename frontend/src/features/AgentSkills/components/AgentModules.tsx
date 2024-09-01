import InfoTab from '../../../components/InfoTab/InfoTab';
import Spinner from '../../../components/Spinner';
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import { useState } from "react";
import SkillTreeStyles from '../styles/SkillTreeStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

type Props = {
  isLoading: boolean;
}

const AgentModules: React.FC<Props> = ({isLoading}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const onToggleExpand = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className={`${DashBoardStyles.agentSkillsContainer} ${isExpanded ? "" : DashBoardStyles.relativeBox}`}>
      <div className={DashBoardStyles.agentSkillsContainerLayer}>
        <div className={DashBoardStyles.label}>Agent Modules</div>
        <InfoTab />
        {isLoading ? (
          <Spinner/>
        ) : (
          <div className={SkillTreeStyles.treeContainer}>
            <ReactFlow />
            <button 
              aria-label='expand' 
              onClick={onToggleExpand}
              className={SkillTreeStyles.expandTreeButton}
            >
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </button>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default AgentModules;
