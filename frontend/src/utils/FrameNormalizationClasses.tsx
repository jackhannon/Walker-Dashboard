import { NullRawFrame, RawFrame, Frame, NullFrame } from "../../types";

class BaseFrame {
  protected processedFrame: Frame | NullFrame;

  constructor(frame: RawFrame | NullRawFrame) {
    this.processedFrame = this.normalizeFrame(frame);
  }

  protected normalizeFrame(frame: RawFrame | NullRawFrame): Frame | NullFrame {
    return {
      hull: {
        angle: this.radiansToDegrees(frame["Hull angle"]),
        horizontalVelocity: frame["Hull horizontal speed"],
        verticalVelocity: frame["Hull vertical speed"],
        coordinate: frame["Hull position"],
      },
      leftLeg: {
        hip: {
          angle: this.radiansToDegrees(frame["Hip 1 angle"]),
          coordinate: frame["Leg 1 position"],
        },
        knee: {
          angle: this.radiansToDegreesLowerLeg(frame["Knee 1 angle"], frame["Hip 1 angle"], Boolean(frame["Leg 1 ground contact"])),
          coordinate: frame["Leg 2 position"],
        },
        isContactingGround: Boolean(frame["Leg 1 ground contact"]),
      },
      rightLeg: {
        hip: {
          angle: this.radiansToDegrees(frame["Hip 2 angle"]),
          coordinate: frame["Leg 3 position"],
        },
        knee: {
          angle: this.radiansToDegreesLowerLeg(frame["Knee 2 angle"], frame["Hip 2 angle"], Boolean(frame["Leg 2 ground contact"])),
          coordinate: frame["Leg 4 position"],
        },
        isContactingGround: Boolean(frame["Leg 2 ground contact"]),
      }
    };
  }

  protected radiansToDegrees(radians: number | null): number | null {
    if (radians === null) return null;
    return radians * (180 / Math.PI);
  }


   protected radiansToDegreesLowerLeg(radians: number | null, hip_angle: number | null, isContactingGround: boolean): number | null {
    if (radians === null) return null;
    // ???
  }


  getProcessedFrame(): Frame | NullFrame {
    return this.processedFrame;
  }
}






export class ProcessedFrame extends BaseFrame {
  protected processedFrame: Frame;

  constructor(frame: RawFrame) {
    super(frame);
    this.processedFrame = this.normalizeFrame(frame) as Frame;
  }
  
  getProcessedFrame(): Frame {
    return this.processedFrame as Frame;
  }
}


export class ProcessedNullFrame extends BaseFrame {
  protected processedFrame: NullFrame;

  constructor(frame: NullRawFrame) {
    super(frame);
    this.processedFrame = this.normalizeFrame(frame) as NullFrame;
  }

  getProcessedFrame(): NullFrame {
    return this.processedFrame as NullFrame;
  }
}