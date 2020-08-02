"use strict";
exports.__esModule = true;
var Vector_1 = require("./weapons/smg/Vector");
var vector = new Vector_1.Vector();
var vector2 = new Vector_1.Vector();
var vector3 = new Vector_1.Vector();
var bullet = vector.shoot();
console.log('shoot bullet', bullet);
vector.updatePointer(10, 20, 2);
var bullet2 = vector.shoot();
console.log('shoot bullet 2', bullet2);
vector.logShoot();
var h = new Vector_1.aver();
h.salida();
vector.salida();
vector.kk();
vector.kk2();
vector.arma2();
//# sourceMappingURL=main.js.map