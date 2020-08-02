"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.FireWeapon = exports.MeleeWeapon = exports.Weapon = void 0;
var WeaponType_1 = require("./WeaponType");
var Bullet_1 = require("../bullets/Bullet");
var Vector3d_1 = require("../Vector3d");
var Weapon = (function () {
    function Weapon(name, damage, type) {
        this.name = name;
        this.damage = damage;
        this.type = type;
    }
    return Weapon;
}());
exports.Weapon = Weapon;
var MeleeWeapon = (function (_super) {
    __extends(MeleeWeapon, _super);
    function MeleeWeapon(name, damage) {
        var _this = _super.call(this, name, damage, WeaponType_1.WeaponType.MELEE) || this;
        _this.name = name;
        _this.damage = damage;
        return _this;
    }
    return MeleeWeapon;
}(Weapon));
exports.MeleeWeapon = MeleeWeapon;
var FireWeapon = (function (_super) {
    __extends(FireWeapon, _super);
    function FireWeapon(name, damage, range, reloadTime, clipSize, bulletsPerSecond, bulletSpeed, simultanousBullets, balas) {
        var _this = _super.call(this, name, damage, WeaponType_1.WeaponType.RANGE) || this;
        _this.name = name;
        _this.damage = damage;
        _this.range = range;
        _this.reloadTime = reloadTime;
        _this.clipSize = clipSize;
        _this.bulletsPerSecond = bulletsPerSecond;
        _this.bulletSpeed = bulletSpeed;
        _this.simultanousBullets = simultanousBullets;
        _this.balas = balas;
        return _this;
    }
    FireWeapon.prototype.updatePointer = function (x, y, z) {
        this.pointer = new Vector3d_1.Vector3d(x, y, z);
    };
    FireWeapon.prototype.shoot = function () {
        return new Bullet_1.Bullet(this.damage, this.bulletSpeed, this.pointer, this.range, this.balas);
    };
    FireWeapon.prototype.logShoot = function () {
        console.log('shooting from FireWeapon class');
    };
    FireWeapon.prototype.salida = function () {
        console.log('Hola puta');
    };
    FireWeapon.prototype.kk = function () {
        var hola = 35;
        for (hola = 35; hola > 0; hola--) {
        }
        console.log('Recarga el Arma' + ' ' + ' Tienes ' + hola + ' Balas');
    };
    FireWeapon.prototype.kk2 = function () {
        var hola = 35;
        for (hola = 35; hola < 1; hola++) {
        }
        console.log('Arma Recargada' + ' ' + ' Tienes ' + hola + ' Balas');
    };
    FireWeapon.prototype.arma2 = function () {
        console.log('Dispara el Arma, hay enemigos enfrente culo!!');
        var stdin = process.openStdin();
        stdin.addListener("data", function (fire) {
            var dispa = fire;
            if (fire < 36) {
                console.log('Disparaste ' + dispa + 'Balas' + ' Hace ' + dispa + 'Segundos ');
                var disparoo = 35 - fire;
                console.log('Te quedaron ' + disparoo + ' balas en el cargador');
            }
            else if (fire > 35) {
                var hola = 35;
                for (hola = 35; hola > 0; hola--) {
                }
                console.log('Recarga el Arma' + ' ' + ' Tienes ' + hola + ' Balas');
            }
            process.exit();
        });
    };
    return FireWeapon;
}(Weapon));
exports.FireWeapon = FireWeapon;
//# sourceMappingURL=Weapon.js.map