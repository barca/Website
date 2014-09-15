 var http = require('http');
 var fs = require('fs');

 function start (){

 http.createServer(function (req, res) {
   res.writeHead(200);
   res.end("hello world\n");

 }).listen(8000);
 }
exports.start = start
