var stream = require('stream');
var util = require('util');

// Randoms takes an additional key in the options object
// that gives the number of random numbers to return

function Randoms (options) {
	stream.Readable.call(this, options);
	this._limit = options.limit || 20;
	this._index = 0;
}

util.inherits(Randoms, stream.Readable);

Randoms.prototype._read = function () {
	var number = (Math.floor(Math.random() * 1000)).toString();
	var buffer = new Buffer(number);
	this.push(buffer);
	this._index++;
	if (this._index === this._limit) {
		this.push(null);
	}
};

module.exports = Randoms;