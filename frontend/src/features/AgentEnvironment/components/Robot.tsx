import React from 'react'

import Hull from './Hull'
import { Frame } from '../../../../types'
import Leg from './Leg'

type Props = {
  frame: Frame
}

const Robot: React.FC<Props> = ({frame}) => {
  return (
    <>
      <Hull coordinate={frame.hull.coordinate} angle={frame.hull.angle}/>
      <Leg 
        upperLegCoordinate={frame.leftLeg.hip.coordinate} 
        upperLegAngle={frame.leftLeg.hip.angle}
        lowerLegCoordinate={frame.leftLeg.knee.coordinate}
        lowerLegAngle={frame.leftLeg.knee.angle}
      />
      <Leg
        upperLegCoordinate={frame.rightLeg.hip.coordinate} 
        upperLegAngle={frame.rightLeg.hip.angle}
        lowerLegCoordinate={frame.rightLeg.knee.coordinate}
        lowerLegAngle={frame.rightLeg.knee.angle}
      />
    </>
  )
}

export default Robot