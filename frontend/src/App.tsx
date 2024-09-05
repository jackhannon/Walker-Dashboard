import './App.css'
import AgentComparison from './features/AgentComparison/components/AgentComparison';
import AgentEnvironment from './features/AgentEnvironment/components/AgentEnvironmentContainer';
import AgentSelector from './features/AgentSelector/components/AgentSelector';
import AgentModules from './features/AgentSkills/components/AgentModules';
import SkillNetwork from './features/AgentSkills/components/Network/SkillNetwork';
import { useAgentStore } from './store';
import DashBoardStyles from './DashBoardStyles.module.css'
import SkillTree from './features/AgentSkills/components/Tree/SkillTree';
function App() {
  const agentType = useAgentStore(state => state?.agents[state.activeAgentIndex]?.name);
  return (
    <div className={DashBoardStyles.dashboard}>
      <AgentEnvironment/>
      <AgentModules>
        {agentType === "Tree" ? (
          <SkillTree />
        ) : (
          <SkillNetwork />
        )}
      </AgentModules>
      <AgentSelector />
      <AgentComparison />
    </div>
  )
}

export default App
