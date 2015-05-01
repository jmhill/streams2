var Randoms = require('./randoms');
var Printer = require('./print');
var LessThan = require('./lessthan');

var randoms = new Randoms({ limit: 30 });
var printer = new Printer();
var lessThan = new LessThan();

randoms.pipe(lessThan.pipe(printer));