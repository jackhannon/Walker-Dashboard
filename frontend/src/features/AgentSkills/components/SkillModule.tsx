import SkillStyles from '../styles/SkillStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { ReactNode } from 'react'
import ModuleInfoTab from './ModuleInfoTab'

type Props = {
 info: string
 children?: ReactNode
}
const SkillModule: React.FC<Props> = ({info, children}) => {

  return (
    <div className={SkillStyles.skillModuleContainer}>
      <div className={`${SkillStyles.skillModule} ${SkillStyles.module}`}>
        <ModuleInfoTab info={info} toggleStyles={SkillStyles.skillInfoToggle}/>
        <FontAwesomeIcon icon={faHand} className={SkillStyles.icon}/>
        {children}
      </div>
    </div>
  )
}

export default SkillModule