import AgentEnvironmentStyles from '../styles/AgentEnvironmentStyles.module.css'


type Props = {
  angle: number
  coordinate: [number, number]
}
const LowerLeg: React.FC<Props> = ({coordinate, angle}) => {
  const lowerLegPath = `
    M${coordinate[0] - 1/10},${coordinate[1] + 6/10}
    L${coordinate[0] + 1/10},${coordinate[1] + 6/10}
    L${coordinate[0] + 1/10},${coordinate[1] - 6/10}
    L${coordinate[0] - 1/10},${coordinate[1] - 6/10}
    Z
  `
  return (
    <g
      className={AgentEnvironmentStyles.lowerLeg}
      transform={`rotate(${angle}, ${coordinate[0]}, ${coordinate[1]})`} 
    >
      <path d={lowerLegPath} strokeWidth="0.02"/>
            {/* <circle cx={coordinate[0]} cy={coordinate[1]} r="0.05" fill="black" /> */}

    </g>
  )
}

export default LowerLeg