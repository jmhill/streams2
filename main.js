var Randoms = require('./randoms');
var Printer = require('./print');

var randoms = new Randoms();
var printer = new Printer();

randoms.pipe(printer);