import { FireWeapon } from "../Weapon";
import { Bullet } from "../../bullets/Bullet";
import { Weapon } from "../Weapon";
export class Smg extends FireWeapon {
  constructor(
    protected readonly name: string,
    protected readonly damage: number,
    protected readonly range = 35,
    protected readonly clipSize = 35,
    protected readonly bulletsXSec: number,
    
  ) {
    super(name, damage, range, 1, clipSize, bulletsXSec, 285, 1, 35);
  }

  public logShoot(): void {
    console.log('shooting from Smg class');
    super.logShoot();

  }
}





  

