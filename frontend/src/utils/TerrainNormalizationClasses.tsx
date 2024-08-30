import {  Terrain, NullTerrain } from "../../types";


export class WalkerTerrain {
  protected terrain: Terrain;

  constructor(terrain: Terrain) {
    this.terrain = terrain as Terrain;
  }

  getTerrain(): Terrain {
    return this.terrain;
  }
}


export class WalkerNullTerrain {
  protected terrain: NullTerrain;

  constructor(terrain: NullTerrain) {
    this.terrain = terrain as NullTerrain;
  }

  getTerrain(): NullTerrain {
    return this.terrain;
  }
}