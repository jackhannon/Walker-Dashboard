import { ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css';
import SkillTreeStyles from '../styles/SkillTreeStyles.module.css'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TreeEditor = () => {
  const onToggleExpand = () => {
    
  }

  return (
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
  )
}

export default TreeEditor