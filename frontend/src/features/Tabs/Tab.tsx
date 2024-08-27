import React from 'react'
import TabStyles from './style/TabStyles.module.css'
const isActive = true
type Props = {
  title: string
}
const Tab:React.FC<Props> = ({title}) => {
  return (
    <div className={`${TabStyles.tab} ${isActive ? TabStyles.activeTab : ""}`}>
      {title}
    </div>
  )
}

export default Tab