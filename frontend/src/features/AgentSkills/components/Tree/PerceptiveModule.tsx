import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SkillStyles from '../../styles/SkillStyles.module.css'
import ModuleInfoTab from '../ModuleInfoTab';


type Props = {
  info: string;
}
const PerceptiveModule: React.FC<Props> = ({info}) => {
  return (
    <div className={`${SkillStyles.perceptiveModule}`}
    >
      <ModuleInfoTab toggleStyles={SkillStyles.infoToggle} info={info}/>
      <div className={`${SkillStyles.perceptiveModuleShape} ${SkillStyles.module}`}>
        <FontAwesomeIcon icon={faEye} className={SkillStyles.icon} />
      </div>
    </div>
  )
}

export default PerceptiveModule