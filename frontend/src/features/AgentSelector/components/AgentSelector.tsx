import DotPagination from '@/components/DotPagination/DotPagination'
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import DotPaginationStyles from '../../../components/DotPagination/styles/DotPaginationStyle.module.css'
import Spinner from '@/components/Spinner'
import InfoTab from '@/components/InfoTab/InfoTab'
import { useAgentStore } from '@/store'
import {motion} from "framer-motion"
import { useShallow } from 'zustand/react/shallow'


type Props = {
  isLoading: boolean
}

const AgentSelector: React.FC<Props> = ({isLoading}) => {
  const { changeActiveAgent, agents } = useAgentStore(
    useShallow((state) => ({
      changeActiveAgent: state.changeActiveAgent,
      agents: state.agents
    })
  ))

  const changeAgent = (index: number) => {
    changeActiveAgent(index)
  }
  
  return (
    <div className={DashBoardStyles.agentSelectorContainer}>
      <div className={DashBoardStyles.label}>Agent Selector</div>
      <InfoTab />
      {isLoading ? (
        <Spinner/>
      ) : (
        <DotPagination handleChange={changeAgent}>
          {agents.map((agent)=> (
            <motion.div 
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
              {agent.type === "Tree" ? (
                <FontAwesomeIcon icon={faBrain} />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 488 488">
                  <g>
                    <g>
                      <path d="M305.4,244c0-33.9-27.6-61.4-61.4-61.4s-61.4,27.5-61.4,61.4s27.6,61.4,61.4,61.4S305.4,277.9,305.4,244z M244,281.4    c-20.6,0-37.4-16.8-37.4-37.4s16.8-37.4,37.4-37.4s37.4,16.8,37.4,37.4S264.6,281.4,244,281.4z"/>
                      <path d="M155.1,232c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S161.7,232,155.1,232z"/>
                      <path d="M103.8,244c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12s-5.4-12-12-12S103.8,237.4,103.8,244z"/>
                      <path d="M88.5,244c0-24.4-19.9-44.3-44.3-44.3S0,219.6,0,244s19.9,44.3,44.3,44.3S88.5,268.4,88.5,244z M44.3,264.3    c-11.2,0-20.3-9.1-20.3-20.3s9.1-20.3,20.3-20.3s20.3,9.1,20.3,20.3S55.4,264.3,44.3,264.3z"/>
                      <circle cx="372.2" cy="244" r="12"/>
                      <path d="M332.9,256c6.6,0,12-5.4,12-12s-5.4-12-12-12s-12,5.4-12,12S326.3,256,332.9,256z"/>
                      <path d="M443.7,199.7c-24.4,0-44.3,19.9-44.3,44.3s19.9,44.3,44.3,44.3S488,268.4,488,244S468.1,199.7,443.7,199.7z M443.7,264.3    c-11.2,0-20.3-9.1-20.3-20.3s9.1-20.3,20.3-20.3S464,232.8,464,244C464,255.2,454.9,264.3,443.7,264.3z"/>
                      <path d="M244,320.9c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S250.6,320.9,244,320.9z"/>
                      <path d="M244,360.2c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S250.6,360.2,244,360.2z"/>
                      <path d="M244,399.5c-24.4,0-44.3,19.9-44.3,44.3S219.6,488,244,488s44.3-19.9,44.3-44.3S268.4,399.5,244,399.5z M244,464    c-11.2,0-20.3-9.1-20.3-20.3s9.1-20.3,20.3-20.3c11.2,0,20.3,9.1,20.3,20.3S255.2,464,244,464z"/>
                      <path d="M244,167.1c6.6,0,12-5.4,12-12s-5.4-12-12-12s-12,5.4-12,12C232,161.7,237.4,167.1,244,167.1z"/>
                      <circle cx="244" cy="115.8" r="12"/>
                      <path d="M244,88.5c24.4,0,44.3-19.9,44.3-44.3S268.4,0,244,0s-44.3,19.9-44.3,44.3S219.6,88.5,244,88.5z M244,24    c11.2,0,20.3,9.1,20.3,20.3s-9.1,20.3-20.3,20.3s-20.3-9.1-20.3-20.3S232.8,24,244,24z"/>
                      <path d="M172.7,298.4c-4.7,4.7-4.7,12.3,0,17s12.3,4.7,17,0s4.7-12.3,0-17C184.9,293.7,177.3,293.7,172.7,298.4z"/>
                      <circle cx="153.4" cy="334.6" r="12"/>
                      <path d="M71.5,353.9c-17.3,17.3-17.3,45.3,0,62.6s45.3,17.3,62.6,0s17.3-45.3,0-62.6C116.8,336.7,88.7,336.7,71.5,353.9z     M117.1,399.6c-7.9,7.9-20.7,7.9-28.6,0s-7.9-20.7,0-28.6s20.7-7.9,28.6,0C125,378.8,125,391.7,117.1,399.6z"/>
                      <circle cx="334.6" cy="153.4" r="12"/>
                      <circle cx="306.9" cy="181.1" r="12"/>
                      <path d="M416.5,134.1c17.3-17.3,17.3-45.3,0-62.6s-45.3-17.3-62.6,0s-17.3,45.3,0,62.6S399.3,151.3,416.5,134.1z M370.9,88.4    c7.9-7.9,20.7-7.9,28.6,0s7.9,20.7,0,28.6s-20.7,7.9-28.6,0C363,109.2,363,96.3,370.9,88.4z"/>
                      <circle cx="334.6" cy="334.6" r="12"/>
                      <path d="M298.4,298.4c-4.7,4.7-4.7,12.3,0,17s12.3,4.7,17,0s4.7-12.3,0-17C310.7,293.7,303.1,293.7,298.4,298.4z"/>
                      <path d="M353.9,353.9c-17.3,17.3-17.3,45.3,0,62.6s45.3,17.3,62.6,0s17.3-45.3,0-62.6C399.3,336.7,371.2,336.7,353.9,353.9z     M399.6,399.6c-7.9,7.9-20.7,7.9-28.6,0s-7.9-20.7,0-28.6s20.7-7.9,28.6,0C407.5,378.8,407.5,391.7,399.6,399.6z"/>
                      <circle cx="181.1" cy="181.1" r="12"/>
                      <circle cx="153.4" cy="153.4" r="12"/>
                      <path d="M134.1,134.1c17.3-17.3,17.3-45.3,0-62.6s-45.3-17.3-62.6,0s-17.3,45.3,0,62.6C88.7,151.3,116.8,151.3,134.1,134.1z     M88.4,88.4c7.9-7.9,20.7-7.9,28.6,0s7.9,20.7,0,28.6s-20.7,7.9-28.6,0C80.5,109.2,80.5,96.3,88.4,88.4z"/>
                    </g>
                  </g>
                </svg>
              )}
              <p>
                {agent.description}
              </p>
            </motion.div>
          ))}
        </DotPagination>
      )}
      
    </div>
  )
}

export default AgentSelector