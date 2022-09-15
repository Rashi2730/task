const moment = require("moment");
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("dddd"));
console.log(moment().format("MMM Do YY"));

let format = "YYYY/MM/DD";
console.log(moment("2020-01-01", format, false).isValid());
console.log(moment("2020-14-01", format, false).isValid());

console.log(moment().add(7, `days`).calendar());
console.log(moment().add(7, `months`).calendar());
console.log(moment().add(7, `years`).calendar());
console.log(moment().subtract(7, `days`).calendar());
console.log(moment().subtract(7, `months`).calendar());
console.log(moment().subtract(7, `years`).calendar());

var date1 = moment("2014-11-11");
var date2 = moment("2015-09-11");
var days = date2.diff(date1, "days");
console.log(days);

var date1 = moment("2014-11-27");
var date2 = moment("2015-09-16");
var days = date2.diff(date1, "days");
console.log(days);

moment("2020-01-01").isAfter("2018-01-01");
moment("2010-01-01").isAfter("2018-01-01");

moment("2019").isLeapYear();
moment("2020").isLeapYear();


