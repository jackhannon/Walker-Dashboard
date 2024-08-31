import React from 'react'
import AgentEnvironmentStyles from '../styles/AgentEnvironmentStyles.module.css'

type Props = {
  coordinate: [number, number]
  angle: number
}

const Hull: React.FC<Props> = ({coordinate, angle}) => {
  const hullPath = `
  M${coordinate[0] - 15/10},${coordinate[1] + 8/10}
  L${coordinate[0] + 2/10}, ${coordinate[1] + 8/10}
  L${coordinate[0] + 16/10},${coordinate[1] + 3/10}
  L${coordinate[0] + 16/10},${coordinate[1] - 2/10}
  L${coordinate[0] - 15/10},${coordinate[1] - 2/10}
  Z
  `
  
  return (
    <g 
      transform={`rotate(${angle}, ${coordinate[0]}, ${coordinate[1]})`} 
      className={AgentEnvironmentStyles.hull} 
    >
      <path d={hullPath} strokeWidth="0.02"/>
      <circle cx={coordinate[0]} cy={coordinate[1]} r="0.05" fill="black" />
    </g>
  )
}

export default Hull