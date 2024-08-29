import React from 'react'
import UpperLeg from './UpperLeg'
import LowerLeg from './LowerLeg'
import Hull from './Hull'
import { Frame } from '../../../../types'

type Props = {
  frame: Frame
}

const Robot: React.FC<Props> = ({frame}) => {
  return (
    <>
      <Hull coordinate={frame.hull.coordinate} angle={frame.hull.angle}/>
      <UpperLeg coordinate={frame.leftLeg.hip.coordinate} angle={frame.leftLeg.hip.angle}/>
      <LowerLeg coordinate={frame.leftLeg.knee.coordinate} angle={frame.leftLeg.knee.angle}/>
  
      <UpperLeg coordinate={frame.rightLeg.hip.coordinate} angle={frame.rightLeg.hip.angle}/>
      <LowerLeg coordinate={frame.rightLeg.knee.coordinate} angle={frame.rightLeg.knee.angle}/>
    </>
  )
}

export default Robot