import { WeaponType } from "./WeaponType";
import { Bullet } from "../bullets/Bullet";
import { Vector3d } from "../Vector3d";
import { close } from "fs";

export class Weapon {
  constructor(
    protected readonly name: string,
    protected readonly damage: number,
    protected readonly type: WeaponType,
  ) {}
}

export class MeleeWeapon extends Weapon {
  constructor(
    protected readonly name: string,
    protected readonly damage: number,
  ) {
    super(name, damage, WeaponType.MELEE);
  }
}

export class FireWeapon extends Weapon {
  private pointer: Vector3d;

  constructor(
    protected readonly name: string,
    protected readonly damage: number,
    protected readonly range: number,
    protected readonly reloadTime: number,
    protected readonly clipSize: number,
    protected readonly bulletsPerSecond: number,
    protected readonly bulletSpeed: number,
    protected readonly simultanousBullets: number,
    public balas : number,
    
  ) {
    super(name, damage, WeaponType.RANGE);
  }

  public updatePointer(x: number, y: number, z: number) {
    this.pointer = new Vector3d(x, y, z);
  }

  public shoot(): Bullet {
   //Listo!! // todo: validar si tiene balas, si tiene balas en el magazine / cargador,
    // validar cuantas balas va a disparar de un jalon...
    // checar cuantas balas dispara por segundo y cuando fue la ultima vez que disparo... 
    return new Bullet(this.damage, this.bulletSpeed, this.pointer, this.range, this.balas);
  }

  //Listo!! // todo: crear metodo para recargar el arma

  public logShoot(): void {
    console.log('shooting from FireWeapon class');
  }
  public salida(): void{
    console.log('Hola puta');
  }
public exit(): void{
  let ba = 35
  for (ba = 35; ba>0; ba--) {
    
    
  }
  console.log('Recarga el Arma'+ ' ' +' Tienes ' +  ba + ' Balas' );
}
public exit2(): void{
  let ba2 = 35
  for (ba2 = 35; ba2<1; ba2++) {
    
    
  }
  
  console.log('Arma Recargada'+ ' ' +' Tienes ' +  ba2 + ' Balas' );
}
public arma2(): void{
  console.log('Dispara el Arma, hay enemigos enfrente culo!!')
  var stdin = process.openStdin();

stdin.addListener("data", function(fire) {
  let dispa: number = fire;
if(fire<36){
 console.log('Disparaste ' + dispa + 'Balas' +  ' Hace ' + dispa + 'Segundos ');
 let disparoo: number = 35 - fire;
 console.log('Te quedaron ' + disparoo + ' balas en el cargador')
}else if(fire>35){
  let bala = 35
  for (bala = 35; bala>0; bala--) {
    
    
  }
  console.log('Recarga el Arma'+ ' ' +' Tienes ' +  bala + ' Balas' );
}
process.exit();
});
}
}
