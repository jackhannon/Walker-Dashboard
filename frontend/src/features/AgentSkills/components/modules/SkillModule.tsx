import SkillStyles from '../../styles/SkillTreeStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import ModuleInfoTab from '../ModuleInfoTab'
import { ModuleNodeProps } from '../../flowTypes'
import ModuleInfoTabStyles from '../../styles/ModuleInfoTabStyles.module.css'


const SkillModule: React.FC<ModuleNodeProps> = ({data}) => {
  return (
    <div className={SkillStyles.skillModuleContainer}>
      <div className={`${SkillStyles.skillModule} ${SkillStyles.module}`}>
        <ModuleInfoTab info={data.info} toggleStyles={ModuleInfoTabStyles.skillInfoToggle}/>
        <FontAwesomeIcon icon={faHand} className={ModuleInfoTabStyles.icon}/>
      </div>
    </div>
  )
}

export default SkillModule