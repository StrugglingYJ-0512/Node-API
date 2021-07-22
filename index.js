
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
  res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

