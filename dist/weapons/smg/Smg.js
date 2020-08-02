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
exports.Smg = void 0;
var Weapon_1 = require("../Weapon");
var Smg = (function (_super) {
    __extends(Smg, _super);
    function Smg(name, damage, range, clipSize, bulletsXSec) {
        if (range === void 0) { range = 35; }
        if (clipSize === void 0) { clipSize = 35; }
        var _this = _super.call(this, name, damage, range, 1, clipSize, bulletsXSec, 285, 1, 35) || this;
        _this.name = name;
        _this.damage = damage;
        _this.range = range;
        _this.clipSize = clipSize;
        _this.bulletsXSec = bulletsXSec;
        return _this;
    }
    Smg.prototype.logShoot = function () {
        console.log('shooting from Smg class');
        _super.prototype.logShoot.call(this);
    };
    return Smg;
}(Weapon_1.FireWeapon));
exports.Smg = Smg;
//# sourceMappingURL=Smg.js.map