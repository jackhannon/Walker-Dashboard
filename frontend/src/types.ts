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


export type Terrain = [number, number][]