import AgentEnvironment from '../features/AgentEnvironment/components/AgentEnvironment'
import AgentComparison from '../features/AgentComparison/components/AgentComparison'
import AgentSelector from '../features/AgentSelector/components/AgentSelector'
import AgentModules from '@/features/AgentSkills/components/AgentModules'
import SkillTree from '@/features/AgentSkills/components/Tree/SkillTree'
import SkillNetwork from '@/features/AgentSkills/components/NeuralNetwork/SkillNetwork'
import DashBoardStyles from '../DashBoardStyles.module.css'
import { useAgentStore } from '@/store'

const Dashboard = () => {
  const agentType = useAgentStore(state => state.agents[state.activeAgentIndex].type);
  return (
    <div className={DashBoardStyles.dashboard}>
      <AgentEnvironment isLoading={false} />
      <AgentModules isLoading={false}>
        {agentType === "Tree" ? (
          <SkillTree />
        ) : (
          <SkillNetwork />
        )}
      </AgentModules>
      <AgentSelector isLoading={false} />
      <AgentComparison isLoading={false} />
    </div>
  )
}

export default Dashboard