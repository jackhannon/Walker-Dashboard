import SkillStyles from '../../styles/SkillTreeStyles.module.css'
import NetworkLayer from './NetworkLayer'
import NetworkModule from './NetworkModule'
import { motion } from 'framer-motion'
const SkillNetwork = () => {
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
      <svg className={SkillStyles.networkContainer} viewBox='0 0 100 100' preserveAspectRatio='XMidYMid meet'>
        <g className={SkillStyles.svgOutline}>

          {/* top left module */}
          <path d={`M33 33, 50 43`} vector-effect="non-scaling-stroke"></path>
          <path d={`M33 33, 50 43`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>
          <path d={`M33 33, 17 43`} vector-effect="non-scaling-stroke"></path>
          <path d={`M33 33, 17 43`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>
          <path d={`M45 25.5, 55 25.5`} vector-effect="non-scaling-stroke"></path>
          <path d={`M45 25.5, 55 25.5`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>

          {/* top right module */}
          <path d={`M67 33, 50 43`} vector-effect="non-scaling-stroke"></path>
          <path d={`M67 33, 50 43`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>
          <path d={`M67 33, 83 43`} vector-effect="non-scaling-stroke"></path>
          <path d={`M67 33, 83 43`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>

          {/* middle left */}
          <path d={`M28 50.5, 55 50.5`} vector-effect="non-scaling-stroke"></path>
          <path d={`M28 50.5, 55 50.5`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>

          {/* middle right*/}
          <path d={`M72 50.5, 62 50.5`} vector-effect="non-scaling-stroke"></path>
          <path d={`M72 50.5, 62 50.5`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>

          {/* bottom left module */}
          <path d={`M33 68, 17 58`} vector-effect="non-scaling-stroke"></path>
          <path d={`M33 68, 17 58`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>
          <path d={`M33 68, 50 58`} vector-effect="non-scaling-stroke"></path>
          <path d={`M33 68, 50 58`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>
          <path d={`M45 75.5, 55 75.5`} vector-effect="non-scaling-stroke"></path>
          <path d={`M45 75.5, 55 75.5`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>

          {/* bottom right Module */}
          <path d={`M67 68, 50 58`} vector-effect="non-scaling-stroke"></path>
          <path d={`M67 68, 50 58`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>
          <path d={`M67 68, 84 58`} vector-effect="non-scaling-stroke"></path>
          <path d={`M67 68, 84 58`} vector-effect="non-scaling-stroke" className={SkillStyles.glowBlur}></path>

        </g>
        <foreignObject className={SkillStyles.network}>
            <div className={SkillStyles.networkLayers}>
              <NetworkLayer>
                <>
                  <NetworkModule info={"A network skill module"}/>
                  <NetworkModule info={"A network skill module"}/>
                </>
              </NetworkLayer>
              <NetworkLayer>
                <>
                  <NetworkModule info={"A network skill module"}/>
                  <NetworkModule info={"A network skill module"}/>
                  <NetworkModule info={"A network skill module"}/>
                </>
              </NetworkLayer>
              <NetworkLayer>
                <>
                  <NetworkModule info={"A network skill module"}/>
                  <NetworkModule info={"A network skill module"}/>
                </>
              </NetworkLayer>
            </div>
        </foreignObject>
      </svg>
    </motion.svg>
  )
}

export default SkillNetwork