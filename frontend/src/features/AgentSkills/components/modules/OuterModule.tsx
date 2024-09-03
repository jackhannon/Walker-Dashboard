import React from 'react'
import ModuleStyles from "../../styles/ModuleStyles.module.css"
import { Node, NodeProps } from '@xyflow/react';

type OuterModuleNode = Node<{ label: string }, 'outerModule'>;

type OuterModuleNodeProps = NodeProps<OuterModuleNode>;

const OuterModule:React.FC<OuterModuleNodeProps> = ({data}) => {
  return (
    <div className={ModuleStyles.outerModule}>{data.label}</div>
  )
}

export default OuterModule