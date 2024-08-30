import React from 'react'
import AgentEnvironmentStyles from '../styles/AgentEnvironmentStyles.module.css'

type Props = {
  coordinate: [number, number]
  angle: number
}

const UpperLeg:React.FC<Props> = ({coordinate, angle}) => {
  const upperLegPath = `
    M${coordinate[0] - 1/10},${coordinate[1] + 6/10}
    L${coordinate[0] + 1/10},${coordinate[1] + 6/10}
    L${coordinate[0] + 1/10},${coordinate[1] - 6/10}
    L${coordinate[0] - 1/10},${(coordinate[1] - 6/10)}
    Z
  `

  return (
    <g
      className={AgentEnvironmentStyles.upperLeg}
      transform={`rotate(${angle}, ${coordinate[0]}, ${coordinate[1]})`} 
    >
      <path d={upperLegPath} strokeWidth="0.02"/>
    </g>  
  )
}

export default UpperLeg