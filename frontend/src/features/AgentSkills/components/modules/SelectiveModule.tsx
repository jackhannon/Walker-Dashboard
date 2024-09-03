import SkillStyles from '../../styles/SkillTreeStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import ModuleInfoTab from '../ModuleInfoTab'
import { ModuleNodeProps } from '../../flowTypes'
import ModuleInfoTabStyles from '../../styles/ModuleInfoTabStyles.module.css'

const SelectiveModule: React.FC<ModuleNodeProps> = ({data}) => {
  return (
    <div className={SkillStyles.selectiveModuleContainer}>
      <ModuleInfoTab info={data.info} toggleStyles={SkillStyles.skillInfoToggle}/>
      <div className={`${SkillStyles.selectiveModule} ${SkillStyles.module}`}>
        <FontAwesomeIcon icon={faBalanceScale} className={ModuleInfoTabStyles.icon}/>
      </div>
    </div>
  
  )
}

export default SelectiveModule