// spec.js 파일은 전부 test 코드라고 보면 된다.
// specification(명세) ; 보통 테스트 코드가 그 테스트 대상의 명세서, 요구사항 이다

const utils = require('./utils')
const should = require('should') // 검증 3rdparty 모듈 : should

// 테스트 환경을 만듬. 
describe('utils.js모듈의 capitalize()함수는 ', () => {
  it('문자열의 첫번째 문자를 대문자로 반환한다.', () => {
    const result = utils.capitalize('hello')
    result.should.be.equal('Hello');
    // 아까보다 더 영어문장을 읽는 느낌
    // 즉, 코드의 가독성이 높아짐. 
  })

})



