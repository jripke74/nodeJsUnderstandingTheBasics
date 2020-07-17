const http = require('http');

const server = http.createServer((reg, res) => {
  console.log(reg);
  process.exit();
});

server.listen('5000');
