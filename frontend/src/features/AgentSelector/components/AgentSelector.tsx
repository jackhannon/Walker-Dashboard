import DashBoardStyles from '../../../DashBoardStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import DotPaginationStyles from '../../../components/DotPagination/styles/DotPaginationStyle.module.css'

import {motion} from "framer-motion"
import { useShallow } from 'zustand/react/shallow'
import NetworkSVG from './NetworkSVG'
import { useAgentStore } from '../../../store'
import InfoTab from '../../../components/InfoTab/InfoTab'
import Pagination from '../../../components/DotPagination/Pagination'
import Disconnected from '../../../components/Disconnected'

const AgentSelector = () => {
  const { changeActiveAgent, agents } = useAgentStore(
    useShallow((state) => ({
      changeActiveAgent: state.changeActiveAgent,
      agents: state.agents
    })
  ))

  const changeAgent = (index: number) => {
    changeActiveAgent(index)
  }
  //not using fetch HOC in pagination to retain modularity
  return (
    <div className={DashBoardStyles.agentSelectorContainer}>
      <div className={DashBoardStyles.label}>Agent Selector</div>
      <InfoTab description={"This is the agent selector"} />
      <Pagination handleChange={changeAgent}>
        {agents.length ? (
          agents.map((agent, index)=> (
            <motion.div 
              key={index}
              className={DotPaginationStyles.information}
              initial={{ opacity: 0}}
              animate={{
                opacity: 1,
                transition: {
                  opacity: {
                    duration: 1
                  },
                }
              }}
            >
              {agent.name === "Tree" ? (
                <FontAwesomeIcon icon={faBrain} />
              ) : (
                <NetworkSVG/>
              )}
              <p>
                {agent.description}
              </p>
            </motion.div>
          )) 
        ) : (
          <Disconnected message='Failed to connect'/>
        )}
      </Pagination>
    </div>
  )
}

export default AgentSelector