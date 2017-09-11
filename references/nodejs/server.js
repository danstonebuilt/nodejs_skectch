var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    console.log(`url: ${request.url}`);

    response.end('It worked!');

}).listen(8888, '127.0.0.1');

console.log('server is on!');
