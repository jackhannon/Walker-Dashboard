import InfoHoverTab from './InfoHoverTab'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SkillTreeStyles from '../styles/SkillTreeStyles.module.css'

type Props = {
  isActive?: boolean
  info: string;
}
const PerceptiveModule: React.FC<Props> = ({isActive = false, info}) => {
  return (
    <div className={`${SkillTreeStyles.perceptiveModule}`}
    >
      <InfoHoverTab toggleStyles={SkillTreeStyles.infoToggle} info={info}/>
      <div className={`${SkillTreeStyles.perceptiveModuleShape} ${SkillTreeStyles.module}`}>
        <FontAwesomeIcon icon={faEye} className={SkillTreeStyles.icon} />
      </div>
    </div>
  )
}

export default PerceptiveModule