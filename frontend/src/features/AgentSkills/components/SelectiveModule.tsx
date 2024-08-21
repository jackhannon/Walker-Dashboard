import SkillTreeStyles from '../styles/SkillTreeStyles.module.css'
import InfoHoverTab from './InfoHoverTab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'

type Props = {
  info: string
}
const SelectiveModule: React.FC<Props> = ({info}) => {
  return (
    <div className={SkillTreeStyles.selectiveModuleContainer}>
      <InfoHoverTab toggleStyles={SkillTreeStyles.infoToggle} info={info} />
      <div className={`${SkillTreeStyles.selectiveModule} ${SkillTreeStyles.module}`}>
        <FontAwesomeIcon icon={faBalanceScale} className={SkillTreeStyles.icon}/>
      </div>
    </div>
  
  )
}

export default SelectiveModule