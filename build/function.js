"use strict";
//tipe data pada balikan function
function getName() {
    return "hallo riqki kamal";
}
console.log(getName());
//argument type
function multiplyCircle(radius) {
    return radius * 2 * Math.PI;
}
var result = multiplyCircle(14);
console.log("luas lingkaran " + result);
var plus = function (val1, val2) {
    return val1 + val2;
};
//default parameter
var fullName = function (first, last) {
    if (last === void 0) { last = "Kamal"; }
    return first + " " + last;
};
console.log(fullName("riqki"));
//optional params
var getAge = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getAge("awe"));
