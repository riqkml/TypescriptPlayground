"use strict";
//object
var Gender;
(function (Gender) {
    Gender["MALE"] = "M";
    Gender["FEMALE"] = "F";
})(Gender || (Gender = {}));
var user = {
    name: "riqki",
    age: 21,
    gender: Gender.MALE,
};
