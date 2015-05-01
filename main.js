var Randoms = require('./randoms');
var randoms = new Randoms(10);

randoms.on('data', function (chunk) {
	console.log(chunk.toString());
})