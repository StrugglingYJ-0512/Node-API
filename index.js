
const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const users = [
  { id: 1, name: 'bek' },
  { id: 2, name: 'alice' },
  { id: 3, name: 'chris' },
]
// DB가 없으므로, 일단 배열을 넣어봄. 

app.use(morgan('dev'))

app.get('/users', (req, res) => {
  // const limit = req.query.limit; // "2"로 문자열임. 따라서, 정수형으로 바꿔주야한다. 
  req.query.limit = req.query.limit || 10;
  //  req.query.limit || 10   --- 의미
  // : req.query.limit 의 숫자가 있으면 그대로 쓰꼬,
  // 없으면, 10을 기본값으로 준다. 
  const limit = parseInt(req.query.limit, 10) // (수로 바꿀 문자열, 10진법)
  if (Number.isNaN(limit)) {
    // limit이 NaN이면 정수가 아니라는 뜻!
    return res.status(400).end()
    // 지금까지는 status(200)을 쓰지 않았는데,이유는 기본이 200으로 되어있어서.
    // 마지막에 end 함수 : 돌려준다!
  }
  res.json(users.slice(0, limit))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// 지금까지는 객체를 할당하였으나, 변수를 할당하여도 괜찮음!
module.exports = app;
