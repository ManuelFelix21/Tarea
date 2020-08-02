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
exports.Knife = void 0;
var Weapon_1 = require("./Weapon");
var WeaponType_1 = require("./WeaponType");
var Knife = (function (_super) {
    __extends(Knife, _super);
    function Knife(name, damage, range, staminaConsumption) {
        var _this = _super.call(this, name, damage, WeaponType_1.WeaponType.RANGE) || this;
        _this.name = name;
        _this.damage = damage;
        _this.range = range;
        _this.staminaConsumption = staminaConsumption;
        return _this;
    }
    return Knife;
}(Weapon_1.Weapon));
exports.Knife = Knife;
//# sourceMappingURL=Knife.js.map