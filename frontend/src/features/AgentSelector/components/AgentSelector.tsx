import DotPagination from '@/components/DotPagination/DotPagination'
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import DotPaginationStyles from '../../../components/DotPagination/styles/DotPaginationStyle.module.css'
import Spinner from '@/components/Spinner'
import InfoTab from '@/components/InfoTab/InfoTab'
const data: string[] = [
  "Simplex", "ben"
]

type Props = {
  isLoading: boolean
}

const AgentSelector: React.FC<Props> = ({isLoading}) => {
  return (
    <div className="agentSelectorContainer">
      <div className={DashBoardStyles.label}>Agent Selector</div>
      <InfoTab />
      {isLoading ? (
        <Spinner/>
      ) : (
        <DotPagination>
            {data.map(()=> (
            <div
              className={DotPaginationStyles.information}
            >
              <FontAwesomeIcon icon={faBrain}/>

              <p>
                Selected is a relatively simple agent which performs one skill
                at a time using a selective and perceptive concepts
              </p>
            </div>
            ))}
        </DotPagination>
      )}
      
    </div>
  )
}

export default AgentSelector