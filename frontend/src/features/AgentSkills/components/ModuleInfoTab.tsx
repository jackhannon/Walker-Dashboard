import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import {motion, AnimatePresence} from "framer-motion"
import InfoStyles from '../styles/ModuleInfoStyles.module.css'

type Props = {
  toggleStyles?: string
  infoStyles?: string
  info: string
}
const ModuleInfoTab:React.FC<Props> = ({toggleStyles, infoStyles, info}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  return (
    <div 
      onMouseLeave={() => setIsHovered(false)} className={`${InfoStyles.container} ${toggleStyles || InfoStyles.infoToggle}`}
      onMouseOver={() => setIsHovered(true)}
      aria-label='hover-for-info'
    >
      <FontAwesomeIcon icon={faInfo}/>

      <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            opacity: {
              duration: .3
            }
          }}
          exit={{
            opacity: 0
          }}
          className={`${InfoStyles.info} ${infoStyles || InfoStyles.defaultInfoPosition}`}
        >
          {info}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}

export default ModuleInfoTab