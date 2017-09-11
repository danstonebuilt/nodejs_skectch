var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {

    console.log(`url: ${request.url}`);
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname+'/files/index.html').pipe(response);

}).listen(8888, '127.0.0.1');

console.log('server is on!');
