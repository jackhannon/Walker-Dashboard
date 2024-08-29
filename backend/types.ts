type joint = {
  angle: number,
  coordinate: [number, number]
}

export type Frame = {
  hull: {
    angle: number,
    horizontalVelocity: number,
    verticalVelocity: number,
    coordinate: [number, number],
  },
  leftLeg: {
    hip: joint,
    knee: joint,
    isContactingGround: boolean
  },
  rightLeg: {
    hip: joint,
    knee: joint,
    isContactingGround: boolean
  }
}


export type RawFrame = {
  "Hull angle": number,
  "Hull angular speed": number,
  "Hull horizontal speed": number,
  "Hull vertical speed": number,
  "Hip 1 angle": number,
  "Knee 1 angle": number,
  "Leg 1 ground contact": number,
  "Hip 2 angle": number,
  "Knee 2 angle": number,
  "Leg 2 ground contact": number,
  "Hull position": [number, number],
  "Leg 1 position": [number, number],
  "Leg 2 position": [number, number],
  "Leg 3 position": [number, number],
  "Leg 4 position": [number, number]
}


export type Terrain = [number, number][]