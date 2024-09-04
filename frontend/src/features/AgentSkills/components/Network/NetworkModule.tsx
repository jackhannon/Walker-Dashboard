import SkillStyles from '../../styles/SkillTreeStyles.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { ReactNode } from 'react'
import ModuleInfoTab from '../ModuleInfoTab'

type Props = {
 info: string
 children?: ReactNode
}
const NetworkModule: React.FC<Props> = ({info, children}) => {

  return (
    <div className={SkillStyles.networkModuleContainer}>
      <div className={`${SkillStyles.networkModule} ${SkillStyles.module}`}>
        <ModuleInfoTab info={info} toggleStyles={SkillStyles.networkInfoToggle}/>
        <FontAwesomeIcon icon={faHand} className={SkillStyles.networkIcon}/>
        {children}
      </div>
    </div>
  )
}

export default NetworkModule