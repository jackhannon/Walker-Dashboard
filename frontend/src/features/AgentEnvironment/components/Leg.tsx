import React from 'react'
import AgentEnvironmentStyles from '../styles/AgentEnvironmentStyles.module.css'

type Props = {
  upperLegCoordinate: [number, number], 
  upperLegAngle: number, 
  lowerLegCoordinate: [number, number], 
  lowerLegAngle: number,
  hullCoordinate: [number, number]
  hullAngle: number
}

const Leg:React.FC<Props> = ({upperLegAngle, lowerLegCoordinate, hullCoordinate, hullAngle}) => {

  // Initial bottom center of hull before rotation
  const initialHullBottomCenter = [
    hullCoordinate[0], 
    hullCoordinate[1] - 2/10
  ];

  const hullAngleInRadians = (Math.PI / 180) * hullAngle;

  const rotatedHullBottomCenter = [
    hullCoordinate[0] + (initialHullBottomCenter[0] - hullCoordinate[0]) * Math.cos(hullAngleInRadians) - (initialHullBottomCenter[1] - hullCoordinate[1]) * Math.sin(hullAngleInRadians),
    hullCoordinate[1] + (initialHullBottomCenter[0] - hullCoordinate[0]) * Math.sin(hullAngleInRadians) + (initialHullBottomCenter[1] - hullCoordinate[1]) * Math.cos(hullAngleInRadians)
  ];


  // Local end point of the upper leg (before rotation)
  const upperLegLocalEndPoint = [
    rotatedHullBottomCenter[0],
    rotatedHullBottomCenter[1] - 1.2
  ];

  // Convert angle to radians
  const upperLegAngleInRadians = (Math.PI / 180) * upperLegAngle;

  // Apply rotation transformation
  const rotatedEndPoint = [
    rotatedHullBottomCenter[0] + (upperLegLocalEndPoint[0] - rotatedHullBottomCenter[0]) * Math.cos(upperLegAngleInRadians) - (upperLegLocalEndPoint[1] - rotatedHullBottomCenter[1]) * Math.sin(upperLegAngleInRadians),
    rotatedHullBottomCenter[1] + (upperLegLocalEndPoint[0] - rotatedHullBottomCenter[0]) * Math.sin(upperLegAngleInRadians) + (upperLegLocalEndPoint[1] - rotatedHullBottomCenter[1]) * Math.cos(upperLegAngleInRadians)
  ];

    
  const upperLegPath = `
    M${rotatedHullBottomCenter[0] - 1/10}, ${rotatedHullBottomCenter[1]}
    L${rotatedHullBottomCenter[0] + 1/10}, ${rotatedHullBottomCenter[1]}
    L${rotatedHullBottomCenter[0] + 1/10}, ${rotatedHullBottomCenter[1] - 1.2}
    L${rotatedHullBottomCenter[0] - 1/10}, ${rotatedHullBottomCenter[1] - 1.2}
    Z
  `
  

  // Initial center of the lower leg before rotation
  const rotatedUpperLegBottomCenter = [
    rotatedEndPoint[0], 
    rotatedEndPoint[1]
  ];



  const vectorToTargetForLowerLeg = [
    lowerLegCoordinate[0] - rotatedUpperLegBottomCenter[0],
    lowerLegCoordinate[1] - rotatedUpperLegBottomCenter[1]
  ];

  const initialVector = [0, 1.2];

  const dotProduct = vectorToTargetForLowerLeg[0] * initialVector[0] + vectorToTargetForLowerLeg[1] * initialVector[1];
  const magnitudeProduct = Math.sqrt(vectorToTargetForLowerLeg[0]**2 + vectorToTargetForLowerLeg[1]**2) * Math.sqrt(initialVector[0]**2 + initialVector[1]**2);
  const angleBetween = Math.acos(dotProduct / magnitudeProduct) * (180 / Math.PI);

  // Determine the correct direction (clockwise or counterclockwise)
  const crossProduct = initialVector[0] * vectorToTargetForLowerLeg[1] - initialVector[1] * vectorToTargetForLowerLeg[0];
  const rotationDirection = crossProduct < 0 ? -1 : 1;

  // // Final lower leg angle
  const finalLowerLegAngle = rotationDirection * angleBetween;


  const lowerLegPath = `
    M${rotatedUpperLegBottomCenter[0] - 1/10},${rotatedUpperLegBottomCenter[1]}
    L${rotatedUpperLegBottomCenter[0] + 1/10},${rotatedUpperLegBottomCenter[1]}
    L${rotatedUpperLegBottomCenter[0] + 1/10},${rotatedUpperLegBottomCenter[1] + 1.2}
    L${rotatedUpperLegBottomCenter[0] - 1/10},${rotatedUpperLegBottomCenter[1] + 1.2}
    Z
  `

  return (
    <>
      <g
        className={AgentEnvironmentStyles.upperLeg}
        transform={`rotate(${upperLegAngle}, ${rotatedHullBottomCenter[0]}, ${rotatedHullBottomCenter[1]})`} 
      >
        <path d={upperLegPath} strokeWidth="0.02"/>
      </g>  
      <g
        className={AgentEnvironmentStyles.lowerLeg}
        transform={`rotate(${finalLowerLegAngle}, ${rotatedUpperLegBottomCenter[0]}, ${rotatedUpperLegBottomCenter[1]})`}
      >
        <path d={lowerLegPath} strokeWidth="0.02"/>
      </g>

    </>
  )
}

export default Leg