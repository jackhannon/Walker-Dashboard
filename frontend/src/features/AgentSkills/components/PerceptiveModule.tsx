import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModulesStyles from '../styles/ModulesStyles.module.css'
import { ReactNode } from 'react';



type RegularProps = {
  children?: ReactNode
}


const PerceptiveModule: React.FC<RegularProps> = ({children}) => {
  return (
    <div className={`${ModulesStyles.perceptiveModule}`}>
      {children}
      <div className={`${ModulesStyles.perceptiveModuleShape} ${ModulesStyles.module}`}>
        <FontAwesomeIcon icon={faEye} className={ModulesStyles.icon} />
      </div>
    </div>
  )
}

export default PerceptiveModule