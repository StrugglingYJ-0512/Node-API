const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n'); // end 함수로 client에게 hello world 보내줌.
});

// listen함수 : 서버를 요청 대기상태로 만들어줌. (서버를 종료시키지 않고 계속 대기중.)
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});