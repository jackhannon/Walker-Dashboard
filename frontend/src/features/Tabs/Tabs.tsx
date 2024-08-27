import React from 'react'
import TabStyles from './style/TabStyles.module.css'
import Tab from './Tab'
const agents = [
  {
    name: "Bot 1"
  },
  {
    name: "Bot 2"
  }
]

const Tabs:React.FC = () => {
  return (
    <div className={TabStyles.tabs}>
      {agents.map(agent => (
        <Tab title={agent.name}/>
      ))}
    </div>
  )
}

export default Tabs