import { Weapon } from "./Weapon";
import { WeaponType } from "./WeaponType";

export class Knife extends Weapon {
  constructor(
    protected readonly name: string,
    protected readonly damage: number,
    protected readonly range: number,
    protected readonly staminaConsumption: number,
  ) {
    super(name, damage, WeaponType.RANGE);
  }
}