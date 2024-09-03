import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SkillStyles from '../../styles/SkillTreeStyles.module.css'
import ModuleInfoTab from '../ModuleInfoTab';
import { ModuleNodeProps } from '../../flowTypes';
import ModuleInfoTabStyles from '../../styles/ModuleInfoTabStyles.module.css'

const PerceptiveModule: React.FC<ModuleNodeProps> = ({data}) => {
  return (
    <div className={SkillStyles.perceptiveModule}>
      <ModuleInfoTab toggleStyles={SkillStyles.infoToggle} info={data.info}/>
      <div className={`${SkillStyles.perceptiveModuleShape} ${SkillStyles.module}`}>
        <FontAwesomeIcon icon={faEye} className={ModuleInfoTabStyles.icon} />
      </div>
    </div>
  )
}

export default PerceptiveModule