import React from 'react'
import AgentEnvironmentStyles from '../styles/AgentEnvironmentStyles.module.css'

type Props = {
  upperLegCoordinate: [number, number], 
  upperLegAngle: number, 
  lowerLegCoordinate: [number, number], 
  lowerLegAngle: number,
}

const Leg:React.FC<Props> = ({upperLegCoordinate, upperLegAngle, lowerLegCoordinate}) => {
  

  
  // Initial bottom center before rotation
  const initialBottomCenter = [
    upperLegCoordinate[0], 
    upperLegCoordinate[1] - 6/10
  ];

  // Convert angle to radians
  const angleInRadians = (Math.PI / 180) * upperLegAngle;
  
  // Calculate the rotated bottom center position
  const rotatedBottomCenter = [
    upperLegCoordinate[0] + (initialBottomCenter[0] - upperLegCoordinate[0]) * Math.cos(angleInRadians) - (initialBottomCenter[1] - upperLegCoordinate[1]) * Math.sin(angleInRadians),
    upperLegCoordinate[1] + (initialBottomCenter[0] - upperLegCoordinate[0]) * Math.sin(angleInRadians) + (initialBottomCenter[1] - upperLegCoordinate[1]) * Math.cos(angleInRadians)
  ];
  


  // Initial center of the lower leg before rotation
  const initialLowerLegCenter = [
    rotatedBottomCenter[0], 
    rotatedBottomCenter[1]
  ];

  // Vector from the initial lower leg center to the target lower leg coordinate
  const vectorToTarget = [
    lowerLegCoordinate[0] - initialLowerLegCenter[0],
    lowerLegCoordinate[1] - initialLowerLegCenter[1]
  ];

  // Initial orientation vector of the lower leg before rotation
  const initialVector = [0, 1.2]; // Lower leg initially pointing straight down

  // Calculate the angle between the initial vector and the vector to the target
  const dotProduct = vectorToTarget[0] * initialVector[0] + vectorToTarget[1] * initialVector[1];
  const magnitudeProduct = Math.sqrt(vectorToTarget[0]**2 + vectorToTarget[1]**2) * Math.sqrt(initialVector[0]**2 + initialVector[1]**2);
  const angleBetween = Math.acos(dotProduct / magnitudeProduct) * (180 / Math.PI);

  // Determine the correct direction (clockwise or counterclockwise)
  const crossProduct = initialVector[0] * vectorToTarget[1] - initialVector[1] * vectorToTarget[0];
  const rotationDirection = crossProduct < 0 ? -1 : 1;

  // Final lower leg angle
  const finalLowerLegAngle = rotationDirection * angleBetween;
  
  const upperLegPath = `
    M${upperLegCoordinate[0] - 1/10},${upperLegCoordinate[1] + 6/10}
    L${upperLegCoordinate[0] + 1/10},${upperLegCoordinate[1] + 6/10}
    L${upperLegCoordinate[0] + 1/10},${upperLegCoordinate[1] - 6/10}
    L${upperLegCoordinate[0] - 1/10},${upperLegCoordinate[1] - 6/10}
    Z
  `

  const lowerLegPath = `
    M${rotatedBottomCenter[0] - 1/10},${rotatedBottomCenter[1]}
    L${rotatedBottomCenter[0] + 1/10},${rotatedBottomCenter[1]}
    L${rotatedBottomCenter[0] + 1/10},${rotatedBottomCenter[1] + 1.2}
    L${rotatedBottomCenter[0] - 1/10},${rotatedBottomCenter[1] + 1.2}
    Z
  `

  return (
    <>
      <g
        className={AgentEnvironmentStyles.upperLeg}
        transform={`rotate(${upperLegAngle}, ${upperLegCoordinate[0]}, ${upperLegCoordinate[1]})`} 
      >
        <path d={upperLegPath} strokeWidth="0.02"/>
      </g>  


      <g
        className={AgentEnvironmentStyles.lowerLeg}
        transform={`rotate(${finalLowerLegAngle}, ${rotatedBottomCenter[0]}, ${rotatedBottomCenter[1]})`}
      >
        <path d={lowerLegPath} strokeWidth="0.02"/>
      </g>

    </>
  )
}

export default Leg