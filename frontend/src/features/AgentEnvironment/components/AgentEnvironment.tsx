import Robot from "./Robot"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { useRef, useState } from "react"
import AgentEnvironmentStyles from '../styles/AgentEnvironmentStyles.module.css'
import * as d3 from 'd3';
import { Terrain } from "../../../../types"
import EnvironmentMinimap from "./EnvironmentMinimap"
import DashBoardStyles from '../../../DashBoardStyles.module.css'
import { useAgentStore } from "../../../store"
import AgentParametersTab from "../../AgentParameters/components/AgentParametersTab"
import Spinner from "../../../components/Spinner"




function extendTerrain(terrain: Terrain) {
  const newTerrain = [...terrain]
  newTerrain.unshift([-20, newTerrain[0][1]])
  newTerrain.push([newTerrain[newTerrain.length-1][0] + 20, newTerrain[newTerrain.length-1][1]])
  return newTerrain
}

function encloseTerrain(terrain: Terrain) {
  const newTerrain = [...terrain]
  newTerrain.unshift([-10, newTerrain[0][1]])
  newTerrain.push([newTerrain[newTerrain.length-1][0] + 10, newTerrain[newTerrain.length-1][1]])
  return newTerrain
}

type Props = {
  isLoading: boolean
}

const AgentEnvironment:React.FC<Props> = ({isLoading}) => {
  const {frame, terrain } = useAgentStore(state => {
    return {
      frame: state.frame, 
      terrain: state.terrain
    }
  });


  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const svgRef = useRef<SVGSVGElement | null>(null);
  const tagHeight = useRef<number>(-9999);
  
  const getSVGInfo = (node: SVGSVGElement) => {
    if (!svgRef.current && node) {
      svgRef.current = node;
    }
    if (svgRef.current) {
      const robotBoundingBox = svgRef.current.getBBox();
      const svgBoundingBox = svgRef.current.getBoundingClientRect();
      tagHeight.current = svgBoundingBox.top + robotBoundingBox.y - 70
    }
  }
  
  const distanceTraveled = Math.round(frame?.["hull"]["coordinate"][0] - 5) || 0;
  const handleSettingsButtonClick = () => {
    setIsSettingsOpen(prev => !prev)
  }

  const xExtent = d3.extent(terrain, d => d[0]);
  const yExtent = d3.extent(terrain, d => d[1]);

  const xScale = d3.scaleLinear()
    .domain(xExtent as [number, number])
    .range([0, 92.86666666666667]);

  const yScale = d3.scaleLinear()
    .domain(yExtent as [number, number])
    .range([3.09733919194946, 3.5456075011624972]);

  const lineGenerator = d3.line<[number, number]>()
    .x(d => xScale(d[0]))
    .y(d => yScale(d[1]));
  

  const terrainPath = lineGenerator(extendTerrain(terrain));
  const minimapPath = lineGenerator(encloseTerrain(terrain));
  let viewboxXOffset;
  if (frame) {
    const robotX = frame.hull.coordinate[0];
    const viewBoxX = xScale(robotX - 3.5);
    viewboxXOffset = viewBoxX;
  }

  return (
    <div className={DashBoardStyles.agentEnvironmentContainer}>
      <div className={DashBoardStyles.label}>Agent Environment</div>
        {(isLoading || !frame) ? (
          <Spinner/>
        ) : (     
          <>
            {isSettingsOpen && <AgentParametersTab />}
            <button
              onClick={handleSettingsButtonClick}
              className={`${AgentEnvironmentStyles.settingsButton} circularButtonOne`}
              aria-label="settings"
            >
              <FontAwesomeIcon icon={faGear} />
            </button>


            <div
              className={`${AgentEnvironmentStyles.agentInfoTag}`}
              style={{ top: `${tagHeight.current}px`}}
          
            >
              <p>speed: {String(frame.hull.horizontalVelocity).slice(0, 3)}</p>
              <div className={AgentEnvironmentStyles.tagTail}></div>
            </div>


            <svg
              className={AgentEnvironmentStyles.environment}
              viewBox={`${viewboxXOffset} 1 7 7`}
              preserveAspectRatio="xMinYMid meet"
            >
              <g ref={getSVGInfo} id="Robot">
                <Robot frame={frame}/>
              </g>

              <g>
                <path d={terrainPath || ''} strokeWidth={0.02}/>
              </g>
            </svg>
            <div className={AgentEnvironmentStyles.extraInfoContainer}>
              <EnvironmentMinimap terrainPath={minimapPath as string} hullCoordinate={frame.hull.coordinate} distanceTraveled={distanceTraveled}/>
            </div>
          </>
        )}
        
    </div>
  )
}

export default AgentEnvironment