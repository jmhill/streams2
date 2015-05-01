var stream = require('stream');
var util = require('util');

function Printer (options) {
	stream.Writable.call(this, options);
};

util.inherits(Printer, stream.Writable);

Printer.prototype._write = function (chunk, encoding, callback) {
	console.log(chunk.toString());
	callback();
};

module.exports = Printer;