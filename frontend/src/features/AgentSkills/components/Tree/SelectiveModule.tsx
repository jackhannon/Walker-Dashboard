import SkillStyles from '../../styles/SkillStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import ModuleInfoTab from '../ModuleInfoTab'

type Props = {
  info: string
}
const SelectiveModule: React.FC<Props> = ({info}) => {
  return (
    <div className={SkillStyles.selectiveModuleContainer}>
      <ModuleInfoTab toggleStyles={SkillStyles.infoToggle} info={info} />
      <div className={`${SkillStyles.selectiveModule} ${SkillStyles.module}`}>
        <FontAwesomeIcon icon={faBalanceScale} className={SkillStyles.icon}/>
      </div>
    </div>
  
  )
}

export default SelectiveModule