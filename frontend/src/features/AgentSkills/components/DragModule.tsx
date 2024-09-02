import React, { ReactNode } from 'react'
import { useDrag } from 'react-dnd'
import ModulesStyles from '../styles/ModulesStyles.module.css'

type Props = {
  children?: ReactNode,
  id?: string
  type: string
}
const DragModule:React.FC<Props> = ({children, type}) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: type,
    item: {type},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div ref={drag} className={`${ModulesStyles.draggableModule} ${isDragging ? ModulesStyles.draggingModule : ""}`}>
      {children}
    </div>
  )
}

export default DragModule