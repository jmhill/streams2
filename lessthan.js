var stream = require('stream');
var util = require('util');

function LessThan (options) {
	stream.Transform.call(this, options);
}

util.inherits(LessThan, stream.Transform);

LessThan.prototype._transform = function (chunk, encoding, callback) {
	var number = parseInt(chunk.toString(), 10);
	console.log("LessThan called");
	if (number > 99) {
		console.log("Number", number);
		return;
	}
};

module.exports = LessThan;