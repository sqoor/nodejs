const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/' || req.url === '/home') {
        responses.homepage(req, res);
    } else if(req.url === '/api/json') {
        responses.api.json(req, res);
    } else {
        responses.notFound(req, res);
    }
});

const responses = {
    homepage: (req, res) => {
        res.writeHead(200, {'Content-type': 'text/html'});
        // const index = fs.readFileSync('./index.html')
        // res.end(index);
        const myReadStream = fs.createReadStream('./index.html', 'utf-8');
        myReadStream.pipe(res);
    },
    api: {
        json: (req, res) => {
            const myObject = {
                name: "abdullah",
                age: 83,
                job: 'ninja'
            };
            res.writeHead(200, {'Contnet-type': 'application/json'});
            res.end(JSON.stringify(myObject));
        }
    },
    notFound: (req, res) => {
        res.writeHead(400, {'Content-type': 'text/plain'});
        res.end('Not found');
    }
}


const PORT = 4000;
server.listen(PORT, '127.0.0.1');
console.log(`Listening to ${PORT}`);

