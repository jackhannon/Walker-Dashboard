import ModulesStyles from '../styles/ModulesStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { ReactNode } from 'react'

type RegularProps = {
  children: ReactNode
}


const SelectiveModule: React.FC<RegularProps> = ({children}) => {
  return (
    <div className={ModulesStyles.selectiveModuleContainer}>
      {children}
      <div className={`${ModulesStyles.selectiveModule} ${ModulesStyles.module}`}>
        <FontAwesomeIcon icon={faBalanceScale} className={ModulesStyles.icon}/>
      </div>
    </div>
  
  )
}

export default SelectiveModule