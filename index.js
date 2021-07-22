const express = require('express')
const app = express()
const morgan = require('morgan') // 3rdParty middleWare 모듈 

// 미들웨어 생성시에는 인자가 3개.
function logger(req, res, next) {
  console.log('i am logger')
  next();
}

function logger2(req, res, next) {
  console.log('i am logger2')
  next()
}

// 미들웨어 추가시 use()쓴다. 
// 추가할 미들웨어를 (괄호) 안에 쓴다. 
app.use(logger)
app.use(logger2);
app.use(morgan('dev'))

app.listen(3000, () => {
  console.log('Server is running')
})