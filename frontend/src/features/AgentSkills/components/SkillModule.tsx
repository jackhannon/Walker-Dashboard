import ModulesStyles from '../styles/ModulesStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { ReactNode } from 'react'

type RegularProps = {
  children: ReactNode
}


const SkillModule: React.FC<RegularProps> = ({children}) => {

  return (
    <div className={`${ModulesStyles.skillModule} ${ModulesStyles.module}`}>
      <FontAwesomeIcon icon={faHand} className={ModulesStyles.icon}/>
      {children}
    </div>
  )
}

export default SkillModule