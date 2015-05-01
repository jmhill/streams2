var stream = require('stream');
var util = require('util');

function LessThan (options) {
	stream.Transform.call(this, options);
}

util.inherits(LessThan, stream.Transform);

LessThan.prototype._transform = function (chunk, encoding, callback) {};

module.exports = LessThan;