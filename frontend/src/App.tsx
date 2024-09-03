import './App.css'
import AgentComparison from './features/AgentComparison/components/AgentComparison';
import AgentEnvironment from './features/AgentEnvironment/components/AgentEnvironment';
import AgentSelector from './features/AgentSelector/components/AgentSelector';
import AgentModules from './features/AgentSkills/components/AgentModules';
import DashBoardStyles from './DashBoardStyles.module.css'
function App() {
  return (
    <div className={DashBoardStyles.dashboard}>
      <AgentEnvironment />
      <AgentModules isLoading={false}/>
      <AgentSelector isLoading={false} />
      <AgentComparison isLoading={false} />
    </div>
  )
}

export default App
