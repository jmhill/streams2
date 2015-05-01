var stream = require('stream');
var util = require('util');

function Randoms (limit) {
	stream.Readable.call(this);
	this._limit = limit;
	this._index = 1;
}

util.inherits(Randoms, stream.Readable);

Randoms.prototype._read = function () {
	var number = (Math.floor(Math.random() * 1000)).toString();
	var buffer = new Buffer(number, 'utf8');
	this.push(buffer);
	this._index++;
	if (this._index === this._limit) {
		this.push(null);
	}
};

module.exports = Randoms;