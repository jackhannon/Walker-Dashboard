import { Frame, RawFrame} from "../types"


function radiansToDegrees(radians: number) {
  return radians * (180 / Math.PI);
}

function radiansToDegreesLowerLeg(radians: number) {
  const angle = radians * (180 / Math.PI);

  return angle
}


function normalizeFrame(frame: RawFrame): Frame {
  const hull = {
    angle: radiansToDegrees(frame["Hull angle"]),
    horizontalVelocity: frame["Hull horizontal speed"],
    verticalVelocity: frame["Hull vertical speed"],
    coordinate: frame["Hull position"],
  }
  const leftLeg = {
    hip: {
      angle: radiansToDegrees(frame["Hip 1 angle"]),
      coordinate: frame["Leg 1 position"]
    },
    knee: {
      angle: radiansToDegreesLowerLeg(frame["Knee 1 angle"]),
      coordinate: frame["Leg 2 position"]
    },
    isContactingGround: Boolean(frame["Leg 1 ground contact"])
  }
  
  const rightLeg = {
    hip: {
      angle: radiansToDegrees(frame["Hip 2 angle"]),
      coordinate: frame["Leg 3 position"]
    },
    knee: {
      angle: radiansToDegreesLowerLeg(frame["Knee 2 angle"]),
      coordinate: frame["Leg 4 position"]
    },
    isContactingGround: Boolean(frame["Leg 2 ground contact"])
  }

  return {hull, leftLeg, rightLeg}
}

export default normalizeFrame