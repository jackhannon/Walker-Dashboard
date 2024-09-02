import React from 'react'
import ModuleStyles from "../../styles/ModuleStyles.module.css"

type Props = {
  label: string
}
const OuterModule:React.FC<Props> = ({label}) => {
  return (
    <div className={ModuleStyles.outerModule}>{label}</div>
  )
}

export default OuterModule