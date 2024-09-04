import { Frame, RawFrame } from "../../types";

export function processFrame(frame: RawFrame): Frame {

  function radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
  }

  return {
    hull: {
      angle: radiansToDegrees(frame["Hull angle"]),
      horizontalVelocity: frame["Hull horizontal speed"],
      verticalVelocity: frame["Hull vertical speed"],
      coordinate: frame["Hull position"],
    },
    leftLeg: {
      hip: {
        angle: radiansToDegrees(frame["Hip 1 angle"]),
        coordinate: frame["Leg 1 position"],
      },
      knee: {
        angle:  radiansToDegrees(frame["Knee 1 angle"]),
        coordinate: frame["Leg 2 position"],
      },
      isContactingGround: Boolean(frame["Leg 1 ground contact"]),
    },
    rightLeg: {
      hip: {
        angle: radiansToDegrees(frame["Hip 2 angle"]),
        coordinate: frame["Leg 3 position"],
      },
      knee: {
        angle: radiansToDegrees(frame["Knee 2 angle"]),
        coordinate: frame["Leg 4 position"],
      },
      isContactingGround: Boolean(frame["Leg 2 ground contact"]),
    }
  }
}