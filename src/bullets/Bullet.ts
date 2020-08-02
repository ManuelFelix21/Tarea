import { Vector3d } from "../Vector3d";

export class Bullet {
  constructor(

    protected readonly damage: number,
    protected readonly speed: number,
    protected readonly direction: Vector3d,
    protected readonly minRange: number,
    protected readonly balass: number,
  ) {}
}
