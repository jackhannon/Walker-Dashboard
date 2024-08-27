import { Frame } from "../types"


function radiansToDegrees(radians: number) {
  return radians * (180 / Math.PI);
}

function radiansToDegreesLowerLeg(radians: number) {
  const angle = radians * (180 / Math.PI);

  return angle
}


function normalizeFrame(frame): Frame {
  const hull = {
    angle: radiansToDegrees(parseFloat(frame["Hull angle"])),
    horizontalVelocity: parseFloat(frame["Hull horizontal speed"]),
    verticalVelocity: parseFloat(frame["Hull vertical speed"]),
    coordinate: frame["Hull position"],
  }
  const leftLeg = {
    hip: {
      angle: radiansToDegrees(parseFloat(frame["Hip 1 angle"])),
      coordinate: frame["Leg 1 position"]
    },
    knee: {
      angle: radiansToDegreesLowerLeg(parseFloat(frame["Knee 1 angle"])),
      coordinate: frame["Leg 2 position"]
    },
    isContactingGround: Boolean(parseFloat(frame["Leg 1 ground contact"]))
  }
  
  const rightLeg = {
    hip: {
      angle: radiansToDegrees(parseFloat(frame["Hip 2 angle"])),
      coordinate: frame["Leg 3 position"]
    },
    knee: {
      angle: radiansToDegreesLowerLeg(parseFloat(frame["Knee 2 angle"])),
      coordinate: frame["Leg 4 position"]
    },
    isContactingGround: Boolean(parseFloat(frame["Leg 2 ground contact"]))
  }

  return {hull, leftLeg, rightLeg}
}

export default normalizeFrame