
import AgentEnvironmentStyles from '../styles/AgentEnvironmentStyles.module.css'
import DashBoardStyles from '../../../DashBoardStyles.module.css'

type Props = {
  terrainPath: string
  hullCoordinate: number[]
  distanceTraveled: number
}
const EnvironmentMinimap:React.FC<Props> = ({terrainPath, hullCoordinate, distanceTraveled}) => {
  return (
    <div className={AgentEnvironmentStyles.miniMap}>
      <div className={DashBoardStyles.distanceTraveled}>
        DISTANCE TRAVELED: {distanceTraveled}m
      </div>
      <svg
      
        preserveAspectRatio="xMinYMid meet"
        viewBox={`0 -20 10 58`}
      >
        <g>
          <circle cx={hullCoordinate[0]} cy={hullCoordinate[1]} r="1" fill="#00dc82" />
        </g>

        <g>
          <path d={terrainPath || ''} strokeWidth={.4}/>
        </g>
      </svg>
    </div>
  )
}

export default EnvironmentMinimap