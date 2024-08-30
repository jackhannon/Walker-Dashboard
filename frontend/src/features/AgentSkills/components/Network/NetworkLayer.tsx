import React, { ReactElement } from 'react'
import SkillStyles from '../../styles/SkillStyles.module.css'

type Props = {
  children: ReactElement
}
const NetworkLayer: React.FC<Props> = ({children}) => {
  return (
    <div className={SkillStyles.networkLayer}>
      {children}
    </div>
  )
}

export default NetworkLayer