import SkillTreeStyles from '../styles/SkillTreeStyles.module.css'
import InfoHoverTab from './InfoHoverTab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'

type Props = {
 isActive?: boolean
 info: string
}
const SkillModule: React.FC<Props> = ({isActive = false, info}) => {

  return (
    <div className={SkillTreeStyles.skillModuleContainer}>
      <div className={`${SkillTreeStyles.skillModule} ${SkillTreeStyles.module}`}>
        <InfoHoverTab info={info} toggleStyles={SkillTreeStyles.infoToggle}/>
        <FontAwesomeIcon icon={faHand} className={SkillTreeStyles.icon}/>
      </div>
    </div>
  )
}

export default SkillModule