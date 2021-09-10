"use strict";
//enum
// numeric enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 0] = "JAN";
    Month[Month["FEB"] = 1] = "FEB";
    Month[Month["MAR"] = 2] = "MAR";
    Month[Month["APR"] = 3] = "APR";
    Month[Month["MAY"] = 4] = "MAY";
})(Month || (Month = {}));
var nameMonth;
(function (nameMonth) {
    nameMonth["JAN"] = "Januari";
    nameMonth["FEB"] = "Februari";
    nameMonth["MAR"] = "Maret";
    nameMonth["APR"] = "April";
    nameMonth["MAY"] = "Mei";
})(nameMonth || (nameMonth = {}));
console.log("index ke " + Month.JAN + " adalah bulan " + nameMonth.JAN);
