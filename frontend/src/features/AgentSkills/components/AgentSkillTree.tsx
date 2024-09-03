import { ReactFlow, ReactFlowJsonObject } from '@xyflow/react'
import ModuleStyles from "../styles/ModuleStyles.module.css"
import OuterModule from './modules/OuterModule'
import SelectiveModule from './modules/SelectiveModule'
import PerceptiveModule from './modules/PerceptiveModule'
import SkillModule from './modules/SkillModule'

type Props = {
  flowChart: ReactFlowJsonObject
}

const AgentSkillTree: React.FC<Props> = ({flowChart}) => {
  return (
    <div className={ModuleStyles.flowChartContainer}>
      <ReactFlow
        nodes={flowChart.nodes}
        edges={flowChart.edges}
        nodeTypes={{
          action: OuterModule,
          input: OuterModule,
          selector: SelectiveModule,
          perceptor: PerceptiveModule,
          skill: SkillModule
        }}

        fitView
      />
    </div>
  )
}

export default AgentSkillTree