"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        this.age = age;
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.User = User;
var user = new User("riqki kamal");
user.age = 21;
console.log("inside class " + user.name + " berumur " + user.age);
//public = dapat diaksses di semua class
//protected = dapat diakses dari class tersebut, dan turunannya
//private = hanya dapat diakses dari class tersebut
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this.phone = phone;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write,
        };
    };
    return Admin;
}(User));
var adm = new Admin("08127312", "riqki");
adm.setName("amrela");
console.log("nama terbaru", adm.getName());
