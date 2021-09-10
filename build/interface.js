"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        throw new Error("Method not implemented.");
    };
    Asus.prototype.off = function () {
        throw new Error("Method not implemented.");
    };
    return Asus;
}());
var Lenovo = /** @class */ (function () {
    function Lenovo(name, isFlagship) {
        this.name = name;
        this.isFlagship = isFlagship;
    }
    Lenovo.prototype.on = function () {
        throw new Error("Method not implemented.");
    };
    Lenovo.prototype.off = function () {
        throw new Error("Method not implemented.");
    };
    return Lenovo;
}());
var lenovo = new Lenovo("Lenovo Legion 5i", true);
var asus = new Asus("Asus Predator 3", true);
console.log("jika laptop " + lenovo.name + " flagship " + lenovo.isFlagship + " maka laptop " + asus.name + " adalah gaming " + asus.isGaming);
