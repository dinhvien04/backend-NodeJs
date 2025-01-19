const { createServer } = require('node:http');

const hostname = '127.0.0.1'; // loacalhost
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // Đặt charset là UTF-8
    res.end('Chào mừng bạn');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
