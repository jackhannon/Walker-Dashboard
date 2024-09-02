import InfoTab from '../../../components/InfoTab/InfoTab';
import Spinner from '../../../components/Spinner';
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import { useState } from "react";
import ModulesStyles from '../styles/ModulesStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ModuleEditor from './Tree/ModuleEditor';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

type Props = {
  isLoading: boolean;
}

const AgentModules: React.FC<Props> = ({isLoading}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const onEditToggle = () => {
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
          <div className={ModulesStyles.treeContainer}>
            <ReactFlow />
            <button 
              aria-label='show module editor' 
              onClick={onEditToggle}
              className={ModulesStyles.expandEditorButton}
            >
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </button>
          </div>
        )}
      </div>
      {isExpanded && (
        <DndProvider backend={HTML5Backend}>
          <ModuleEditor toggleContract={onEditToggle}/>
        </DndProvider>
      )}
      
    </div>
  )
}

export default AgentModules;
