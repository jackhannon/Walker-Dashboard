import { useAgentStore } from '../../../../store'
import SkillStyles from '../../styles/SkillTreeStyles.module.css'
import PerceptionLayer from './PerceptionLayer'
import SkillLayer from './SkillLayer'
import { motion } from 'framer-motion'
import Trace from './Trace'
import withFetchState from '../../../../HOC/FetchStateHOC'
type Props = {
  perceptorId?: number
  skillId?: number
}
const SkillTree:React.FC<Props> = withFetchState(() => {
  const {perceptorId, skillId} = useAgentStore(state => {
    return {
      perceptorId: state.activeTreePath.perceptorIndex,
      skillId: state.activeTreePath.skillIndex
    }
  })

    
  return (
    <motion.svg 
      className={SkillStyles.view}
      initial={{ opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          opacity: {
            duration: 1
          },
        }
      }}
    >
      <svg className={SkillStyles.treeContainer} viewBox='0 0 100 200' preserveAspectRatio='XMidYMid meet'>
        

        <Trace perceptorId={perceptorId} skillId={skillId} key={String(perceptorId) + String(skillId)}/>
        <foreignObject className={SkillStyles.treeModules}>
          <div className={SkillStyles.outerModuleLabel}>sensor</div>
          <div className={SkillStyles.modules}>
            <PerceptionLayer activePerceptorPosition={perceptorId} />
            <SkillLayer activeSkillPosition={skillId}/>
          </div>
            
          <div className={`${SkillStyles.decisionLayer} ${SkillStyles.outerTree}`}>
            <div className={SkillStyles.outerModuleLabel}>Decision</div>
          </div>
        </foreignObject>
      </svg>
    </motion.svg>
  )
})

export default SkillTree