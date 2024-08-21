import AgentEnvironment from '../features/AgentEnvironment/components/AgentEnvironment'
import AgentComparison from '../features/AgentComparison/components/AgentComparison'
import AgentSelector from '../features/AgentSelector/components/AgentSelector'
import AgentSkillTree from '@/features/AgentSkills/components/AgentSkillTree'

const Dashboard = () => {

  return (
    <div className='dashboard'>

      <AgentEnvironment isLoading={false}/>
      <AgentSkillTree isLoading={false}/>
      <AgentSelector isLoading={false}/>
      <AgentComparison isLoading={false}/>
      
    </div>
  )
}

export default Dashboard