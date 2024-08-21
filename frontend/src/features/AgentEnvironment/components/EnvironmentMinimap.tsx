
import AgentEnvironmentStyles from '../styles/AgentEnvironmentStyles.module.css'


const EnvironmentMinimap = ({terrainPath, hullCoordinate, distanceTraveled}) => {
  return (
    <div className={AgentEnvironmentStyles.miniMap}>
      <div className="distanceTraveled">
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