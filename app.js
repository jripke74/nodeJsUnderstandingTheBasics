const http = require('http');

const server = http.createServer((reg, res) => {
  console.log(reg);
});

server.listen('5000');
