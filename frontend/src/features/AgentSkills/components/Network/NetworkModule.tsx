import SkillStyles from '../../styles/SkillStyles.module.css'
import InfoHoverTab from '../Tree/ModuleInfoTab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { ReactNode } from 'react'

type Props = {
 info: string
 children?: ReactNode
}
const NetworkModule: React.FC<Props> = ({info, children}) => {

  return (
    <div className={SkillStyles.networkModuleContainer}>
      <div className={`${SkillStyles.networkModule} ${SkillStyles.module}`}>
        <InfoHoverTab info={info} toggleStyles={SkillStyles.networkInfoToggle}/>
        <FontAwesomeIcon icon={faHand} className={SkillStyles.networkIcon}/>
        {children}
      </div>
    </div>
  )
}

export default NetworkModule