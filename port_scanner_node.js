var net = require('net');

var host = process.argv[2];
var port = process.argv[3];


function checkPort(port) {
 var socket = net.connect(port, host);
 socket.on('connect', function(){
	console.log(port + "/tcp is Open");
	socket.end();
 });

 socket.on('error', function(err){
	console.log(port + " error ");
	socket.destroy();
 });
}

checkPort(port);