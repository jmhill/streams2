var Randoms = require('./randoms');
var randoms = new Randoms();

randoms.on('data', function (chunk) {
	console.log(chunk.toString());
})