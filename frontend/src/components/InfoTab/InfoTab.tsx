import { useState } from 'react'
import InfoTabStyles from './styles/InfoTabStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  togglePositionStyles?: string
  infoPositionStyles?: string
  moduleInfo?: string
}

const InfoTab: React.FC<Props> = ({togglePositionStyles, infoPositionStyles}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  return (
    <div onMouseLeave={() => setIsHovered(false)}>
      <div 
        className={`${isHovered ? InfoTabStyles.hovered : InfoTabStyles.notHovered} ${InfoTabStyles.infoToggle} ${togglePositionStyles || InfoTabStyles.defaultTogglePosition}`}
        onMouseOver={() => setIsHovered(true)}
        aria-label='info-tab'
      >
        <FontAwesomeIcon icon={faInfo}/>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className={`${InfoTabStyles.info} ${infoPositionStyles || InfoTabStyles.defaultInfoPosition}`}
            initial={{width:0, height:0, opacity: 0}}
            animate={{
              width: "15rem", 
              height: "auto",
              opacity: 1,
              transition: {
                opacity: {
                  duration: .3
                },
                width: {
                  duration: .3
                },
                height: {
                  duration: .3
                }
              }
            }}
            exit={{
              width:0, height:0, opacity: 0
            }}
          >
            <motion.div 
              className={InfoTabStyles.pseudoInfoIcon}
              initial={{width:0, height:0}}
              animate={{
                width: "2rem", 
                height: "2rem",
                transition: {
                  opacity: {
                    duration: .3
                  },
                  width: {
                    duration: .3
                  },
                  height: {
                    duration: .3
                  }
                }
              }}
              exit={{
                width:0, height:0
              }}
            >
            </motion.div>
            <motion.p
              key={Date.now()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: {
                  duration: .3,
                  delay: .3
                }
              }}
              exit={{
                opacity: 0
              }}
            >
              The Agent modules make up the actual agent. Starting at with sensors, then perceptors, then a selection,
              then skills, we reach a descision for the agents next action
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InfoTab