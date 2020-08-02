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
exports.aver = exports.Vector = void 0;
var Smg_1 = require("./Smg");
var Vector = (function (_super) {
    __extends(Vector, _super);
    function Vector() {
        return _super.call(this, 'Vector', 110, 45, 22, 10) || this;
    }
    return Vector;
}(Smg_1.Smg));
exports.Vector = Vector;
var aver = (function () {
    function aver() {
    }
    aver.prototype.salida = function () {
        var hola = 35;
        for (hola = hola; hola < 1; hola--) {
            console.log('Recarga el Arma' + ' ' + hola);
        }
    };
    return aver;
}());
exports.aver = aver;
//# sourceMappingURL=Vector.js.map