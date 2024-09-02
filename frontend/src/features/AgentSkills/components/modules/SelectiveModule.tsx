import SkillStyles from '../styles/SkillStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import ModuleInfoTab from '../ModuleInfoTab'

type Props = {
  idx: number
}
const SelectiveModule: React.FC<Props> = ({idx}) => {
  return (
    <div className={SkillStyles.selectiveModuleContainer}>
      <div className={`${SkillStyles.selectiveModule} ${SkillStyles.module}`}>
        <FontAwesomeIcon icon={faBalanceScale} className={SkillStyles.icon}/>
      </div>
    </div>
  
  )
}

export default SelectiveModule