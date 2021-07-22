const express = require('express')
const app = express()

// 일반 미들웨어 (인자 : 3개)
function commonMW(req, res, next) {
  console.log('This is commonMW')
  next(new Error('error ouccered')) //error 발생 ==> next 함수에 Err객체를 던져준다.

}
// Error 미들웨어.
function errormw(err, req, res, next) { // 이 전 middleWare에서 넘겨준 err객체를 err파라미터가 받는다. 
  console.log(err.message) // 전달받은 error를 처리 or 처리 못했으면, 다음 middleWare 로 넘김
  next(); // 여기에서는 Error를 처리 했다고 치고, next를 넘긴다. 
}

app.use(commonMW);
app.use(errormw);

app.listen(3000, () => {
  console.log('Server is running')
})