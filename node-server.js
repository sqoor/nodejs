var http = require('http');

var server = http.createServer(function(req, res) {
    console.log(req.url);

    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Welcome to nodejs server');
});

const PORT = 3000
server.listen(PORT, '127.0.0.1');
console.log(`Listening to ${PORT}...`);