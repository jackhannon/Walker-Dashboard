import { Handle, NodeProps, Position } from '@xyflow/react'
import React, { ReactNode } from 'react'
import ModuleStyles from '../styles/ModulesStyles.module.css'

const FlowModuleContainer:React.FC<NodeProps> = ({...props}) => {
  return (
    <div className={ModuleStyles.flowModuleContainer}>
      {props.data.children as ReactNode}

      <Handle
        type="target"
        position={Position.Top}
        id="top-handle"
        style={{ opacity: 0}}
      />
       <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-handle"
        style={{ opacity: 0}}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right-handle"
        style={{ opacity: 0}}
      />
    </div>
  )
}

export default FlowModuleContainer