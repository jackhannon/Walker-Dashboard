import SkillStyles from '../../styles/SkillStyles.module.css'
import PerceptionLayer from './PerceptionLayer'
import SkillLayer from './SkillLayer'
import { motion } from 'framer-motion'
type Props = {
  perceptorId?: number
  skillId?: number
}
const SkillTree:React.FC<Props> = ({perceptorId = 3, skillId = 2}) => {
  const connectorSegmentUnit = 10;
  const rightPath = `M50 1, 59.5 1, A.15 .14 0 0 1 59.5 ${connectorSegmentUnit}, L50 ${connectorSegmentUnit}, 50 ${connectorSegmentUnit * 2.5},
    ${perceptorId === 0 ? (
      `14.4 ${connectorSegmentUnit * 2.5}, 14.4 ${connectorSegmentUnit * 3.80}, 24.6 ${connectorSegmentUnit * 3.80}, 28.9 ${connectorSegmentUnit * 4.75}, 24.6 ${connectorSegmentUnit*5.80}, 14.4 ${connectorSegmentUnit * 5.80}, 14.4 ${(connectorSegmentUnit * 7)-.5}A.5 .5 0 0 0 15 ${connectorSegmentUnit * 7}, L50 ${connectorSegmentUnit * 7},`
    ) : perceptorId === 1 ? (
      `50 ${connectorSegmentUnit * 3.80}, 60 ${connectorSegmentUnit * 3.80}, 64.3, ${connectorSegmentUnit * 4.75}, 60 ${connectorSegmentUnit*5.80}, 50 ${connectorSegmentUnit * 5.80}, 50 ${connectorSegmentUnit*7},`
    ) : (
      `85.8 ${connectorSegmentUnit * 2.5}, 85.8 ${connectorSegmentUnit * 3.80}, 95.8 ${connectorSegmentUnit * 3.80}, 100 ${connectorSegmentUnit * 4.75}, 95.8 ${connectorSegmentUnit * 5.80}, 85.5 ${connectorSegmentUnit * 5.80}, 85.5 ${(connectorSegmentUnit * 7)-.5}A.5 .5 0 0 1 85.3 ${connectorSegmentUnit * 7}, L50 ${connectorSegmentUnit * 7},`
    )}`
    + 
    `50 ${connectorSegmentUnit * 8.5}, 65 ${connectorSegmentUnit * 10}, 50 ${connectorSegmentUnit * 11.5}, 50 ${connectorSegmentUnit * 13}`
    +
    `${skillId === 0 ? (
      `L15 ${connectorSegmentUnit * 13}A.5 .5 0 0 0 14.4 ${(connectorSegmentUnit * 13) + .5}, L14.4 ${connectorSegmentUnit * 14.25}, 28.8 ${connectorSegmentUnit * 14.25}, 28.8 ${connectorSegmentUnit * 16.20}, 14.4 ${connectorSegmentUnit * 16.20}, 14.4 ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 19},`
    ) : skillId === 1 ? (
      `L50 ${connectorSegmentUnit * 14.25}, 64.5 ${connectorSegmentUnit * 14.25}, 64.5 ${connectorSegmentUnit * 16.15}, 50 ${connectorSegmentUnit * 16.15} 50 ${connectorSegmentUnit * 19},` 
    ) : (
      `L85 ${connectorSegmentUnit * 13}A.5 .5 0 0 1 85.6 ${(connectorSegmentUnit * 13) + .5}, L85.6 ${connectorSegmentUnit * 14.25}, 99.8 ${connectorSegmentUnit * 14.25}, 99.8 ${connectorSegmentUnit * 16.15}, 85.8 ${connectorSegmentUnit * 16.15}, 85.8  ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 19},`
    )}`
    +
    `59.5 ${connectorSegmentUnit * 19}, A.15 .14 0 0 1 59.5 ${(connectorSegmentUnit * 20)-1}, L50 ${(connectorSegmentUnit * 20)-1}`


    const leftPath = `M50 1, 40.5 1, A.15 .14 0 0 0 40.5 ${connectorSegmentUnit}, L50 ${connectorSegmentUnit}, 50 ${connectorSegmentUnit * 2.5},
    ${perceptorId === 0 ? (
      `14.4 ${connectorSegmentUnit * 2.5}, 14.4 ${connectorSegmentUnit * 3.80}, 4 ${connectorSegmentUnit * 3.80}, 0.2 ${connectorSegmentUnit * 4.75}, 4.3 ${connectorSegmentUnit * 5.80}, 14.4 ${connectorSegmentUnit * 5.80}, 14.4 ${(connectorSegmentUnit * 7)-.5}A.5 .5 0 0 0 15 ${connectorSegmentUnit * 7}, L50 ${connectorSegmentUnit * 7},`
    ) : perceptorId === 1 ? (
      `50 ${connectorSegmentUnit * 3.80}, 40 ${connectorSegmentUnit * 3.80}, 35.7, ${connectorSegmentUnit * 4.75}, 40 ${connectorSegmentUnit*5.80}, 50 ${connectorSegmentUnit * 5.80}, 50 ${connectorSegmentUnit*7},`
    ) : (
      `85.8 ${connectorSegmentUnit * 2.5}, 85.8 ${connectorSegmentUnit * 3.80}, 75.2 ${connectorSegmentUnit * 3.80}, 71.2 ${connectorSegmentUnit * 4.75}, 75.4 ${connectorSegmentUnit * 5.80}, 85.1 ${connectorSegmentUnit * 5.80}, 85.5 ${(connectorSegmentUnit * 7)-.5}A.5 .5 0 0 1 85.3 ${connectorSegmentUnit * 7}, L50 ${connectorSegmentUnit * 7},`
    )}`
    + 
    `50 ${connectorSegmentUnit * 8.5}, 35 ${connectorSegmentUnit * 10}, 50 ${connectorSegmentUnit * 11.5}, 50 ${connectorSegmentUnit* 13}`
    +
    `${skillId === 0 ? (
      `L15 ${connectorSegmentUnit * 13}A.5 .5 0 0 0 14.4 ${(connectorSegmentUnit * 13) + .5}, L14.4 ${connectorSegmentUnit * 14.25}, 0.2 ${connectorSegmentUnit * 14.25}, 0.2 ${connectorSegmentUnit * 16.20}, 14.4 ${connectorSegmentUnit * 16.20}, 14.4  ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 19},`
    ) : skillId === 1 ? (
      `L50 ${connectorSegmentUnit * 14.25}, 35.5 ${connectorSegmentUnit * 14.25}, 35.5 ${connectorSegmentUnit * 16.15}, 50 ${connectorSegmentUnit * 16.15}, 50 ${connectorSegmentUnit * 19},`
    ) : (
      `L85 ${connectorSegmentUnit * 13}A.5 .5 0 0 1 85.6 ${(connectorSegmentUnit * 13) + .5}, L85.6  ${connectorSegmentUnit * 14.25}, 71.7 ${connectorSegmentUnit * 14.25}, 71.7 ${connectorSegmentUnit * 16.15}, 85.8 ${connectorSegmentUnit * 16.15}, 85.8 ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 19},`
    )}`
    +
    `40.5 ${connectorSegmentUnit * 19}, A.15 .14 0 0 0 40.5 ${(connectorSegmentUnit * 20)-1}, L50 ${(connectorSegmentUnit * 20)-1}`
  
    
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
        <g className={SkillStyles.inactiveConnectors}>
          <path vector-effect="non-scaling-stroke" d={`M50 ${connectorSegmentUnit}, 50 ${connectorSegmentUnit * 2.5}, 14.4 ${connectorSegmentUnit * 2.5}, 14.4 ${connectorSegmentUnit * 5.75}, 14.4 ${(connectorSegmentUnit * 7)-.5}A.5 .5 0 0 0 15 ${connectorSegmentUnit * 7}, L50 ${connectorSegmentUnit * 7}, 50 ${connectorSegmentUnit * 13} 15 ${connectorSegmentUnit * 13}A.5 .5 0 0 0 14.4 ${(connectorSegmentUnit * 13) + .5}, L14.4 ${connectorSegmentUnit * 14.25} 14.4 ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 19}`}></path>
          <path vector-effect="non-scaling-stroke" d={`M50 ${connectorSegmentUnit * 2.5} 50 ${connectorSegmentUnit * 19}`}></path>
          <path vector-effect="non-scaling-stroke" d={`M50 ${connectorSegmentUnit}, 50 ${connectorSegmentUnit * 2.5}, 14.4 ${connectorSegmentUnit * 2.5}, 14.4 ${connectorSegmentUnit * 5.75}, 14.4 ${(connectorSegmentUnit * 7)-.5}A.5 .5 0 0 0 15 ${connectorSegmentUnit * 7}, L50 ${connectorSegmentUnit * 7}, 50 ${connectorSegmentUnit * 13} 15 ${connectorSegmentUnit * 13}A.5 .5 0 0 0 14.4 ${(connectorSegmentUnit * 13) + .5}, L14.4 ${connectorSegmentUnit * 14.25} 14.4 ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 17.5}, 50 ${connectorSegmentUnit * 19}`} transform="scale(-1, 1) translate(-100, 0)"></path>
        </g>
        <g className={SkillStyles.svgOutline}>
          <path d={leftPath} vector-effect="non-scaling-stroke"></path>
          <path d={leftPath} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>
          <path d={rightPath} vector-effect="non-scaling-stroke"></path>
          <path d={rightPath} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>
        </g>
        
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
}

export default SkillTree