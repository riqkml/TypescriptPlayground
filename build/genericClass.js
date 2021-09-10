"use strict";
var List = /** @class */ (function () {
    function List() {
        var element = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            element[_i] = arguments[_i];
        }
        this.data = element;
    }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    List.prototype.addMultiple = function () {
        var _a;
        var element = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            element[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, element);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
var list = new List(1, 2, 3);
console.log(list);
