import { ReactFlow } from '@xyflow/react'
import { useAgentStore } from '../../../store'
import ModuleStyles from "../styles/ModuleStyles.module.css"
import OuterModule from './modules/OuterModule'
import SelectiveModule from './modules/SelectiveModule'

const AgentSkillTree = () => {
  const flowChartData = useAgentStore(state => state.flowChart)
  return (
    <div className={ModuleStyles.flowChartContainer}>
      <ReactFlow
        nodes={flowChartData.nodes}
        edges={flowChartData.edges}
        edgeTypes={
          funnelEdge,
          roundedEdge,
          selectorEdge,
          actionsSensorsEdge,
        }
        nodeTypes={{
          funnel,
          perceptors-collection,
          skills-collection,
          actions: OuterModule,
          sensors: OuterModule,
          selector: SelectiveModule
        }}
        fitView
      />
    </div>
  )
}

export default AgentSkillTree