const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {

  // 사용자의 요청한 정보의 경로명에 맞게 분기한다. 
  // req : 사용자의 요청 정보 
  console.log(req.url);

  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n'); // end 함수로 client에게 hello world 보내줌.
  } else if (req.url === '/users') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('User list\n'); // end 함수로 client에게 hello world 보내줌.

  }
  else {
    res.statusCode = 404;
    res.end('Not Found')
  }


});

// listen함수 : 서버를 요청 대기상태로 만들어줌. (서버를 종료시키지 않고 계속 대기중.)
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});