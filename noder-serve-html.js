const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    if(req.url === '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
        // const index = fs.readFileSync('./index.html')
        // res.end(index);
        const myReadStream = fs.createReadStream('./index.html', 'utf-8');
        myReadStream.pipe(res);
    } else {
        res.writeHead(400, {'Content-type': 'text/plain'});
        res.end('Not found');
    }
});


const PORT = 3000;
server.listen(PORT, '127.0.0.1');
console.log(`Listening to ${PORT}...`);