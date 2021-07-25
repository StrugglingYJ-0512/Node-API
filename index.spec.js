const request = require('supertest') // supertest 모듈 가져옴
const should = require('should')
const app = require('./index') // 테스트 하는 파일

// test 코드 작성
// test suit : describe
describe('GET /users는', () => {
  describe('성공시', () => {
    it('user 객체를 담은 배열로 응답한다.', (done) => {
      request(app)
        .get('/users')
        .end((err, res) => {
          // 배열이라는 것 검증 - should
          res.body.should.be.instanceOf(Array)
          done()
        })
    })

    it('최대 limit 갯수만큼 응답한다.', (done) => {
      request(app)
        .get('/users?limit=2') // user리스트를 2개만 받겠다! 라는 의미
        .end((err, res) => {

          res.body.should.have.lengthOf(2)
          done()
        })
    })
  })

  describe('실패시', () => {
    it('limit이 숫자 형이 아니면 400을 응답하낟. ', (done) => {
      request(app)
        .get('/users?limit=two')
        .expect(400)
        .end(done())
    })
  })
})



