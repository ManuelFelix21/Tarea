
import {   Vector } from "./weapons/smg/Vector";

const vector = new Vector();
const vector2 = new Vector();
const vector3 = new Vector();


const bullet = vector.shoot();
console.log('shoot bullet', bullet);

vector.updatePointer(10, 20, 2);

const bullet2 = vector.shoot();
console.log('shoot bullet 2', bullet2);


vector.logShoot();

vector.salida();
vector.exit();
vector.exit2();
vector.arma2();
