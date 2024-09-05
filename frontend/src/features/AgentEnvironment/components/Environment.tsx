import Robot from "./Robot"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { useRef, useState } from "react"
import AgentEnvironmentStyles from '../styles/AgentEnvironmentStyles.module.css'
import * as d3 from 'd3';
import { Frame, Terrain } from "../../../../types"
import EnvironmentMinimap from "./EnvironmentMinimap"
import AgentParametersTab from "../../AgentParameters/components/AgentParametersTab"
import withFetchState from "../../../components/FetchStateHOC"


type Props = {
  frame: Frame
  terrain: Terrain
}

const Environment: React.FC<Props> = withFetchState(({frame, terrain}) => {

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

  //if terrain is lost by store, but frames are still coming through we will still have it
  const terrainRef = useRef<Terrain>()

  if (!terrainRef.current && terrain !== null) {
    terrainRef.current = terrain;
  }


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
  
  const handleSettingsButtonClick = () => {
    setIsSettingsOpen(prev => !prev)
  }

  const distanceTraveled = Math.round(frame["hull"]["coordinate"][0] - 5);
  
  let xExtent;
  let yExtent;
  let xScale: d3.ScaleLinear<number, number, never>;
  let yScale: d3.ScaleLinear<number, number, never>;
  let lineGenerator;
  let terrainPath;
  let minimapPath;
  let viewboxXOffset;

  if (terrainRef.current) {
    xExtent= d3.extent(terrainRef.current, d => d[0]);
    yExtent = d3.extent(terrainRef.current, d => d[1]);

    xScale = d3.scaleLinear()
      .domain(xExtent as [number, number])
      .range([0, 92.86666666666667]);

    yScale = d3.scaleLinear()
      .domain(yExtent as [number, number])
      .range([3.09733919194946, 3.5456075011624972]);

    lineGenerator = d3.line<[number, number]>()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]));
    
    terrainPath = lineGenerator(extendTerrain(terrainRef.current));
    minimapPath = lineGenerator(encloseTerrain(terrainRef.current));
    const robotX = frame.hull.coordinate[0];
    const viewBoxX = xScale(robotX - 3.5);
    viewboxXOffset = viewBoxX;
  }

  return (
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
  )
})

export default Environment