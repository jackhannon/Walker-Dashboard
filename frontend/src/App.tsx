import './App.css'
import AgentComparison from './features/AgentComparison/components/AgentComparison';
import AgentEnvironment from './features/AgentEnvironment/components/AgentEnvironment';
import AgentSelector from './features/AgentSelector/components/AgentSelector';
import AgentModules from './features/AgentSkills/components/AgentModules';
import SkillNetwork from './features/AgentSkills/components/Network/SkillNetwork';
import { useAgentStore } from './store';
import DashBoardStyles from './DashBoardStyles.module.css'
import SkillTree from './features/AgentSkills/components/Tree/SkillTree';
function App() {
  const agentType = useAgentStore(state => state.agents[state.activeAgentIndex].type);
  return (
    <div className={DashBoardStyles.dashboard}>
      <AgentEnvironment />
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

export default App
