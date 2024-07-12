const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Hello there this is the home page</h1>')
    }
    else if (req.url === '/about') {
        res.end('<h1>Hello there this is about page</h1>')
    }
    else {
        res.end('unluckkky')

    }
})

server.listen(5000);
