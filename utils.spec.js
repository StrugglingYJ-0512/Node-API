// spec.js 파일은 전부 test 코드라고 보면 된다.
// specification(명세) ; 보통 테스트 코드가 그 테스트 대상의 명세서, 요구사항 이다

const utils = require('./utils')
const assert = require('assert') // 맞냐 안맞냐 검증하는 모듈

// 테스트 환경을 만듬. 
describe('utils.js모듈의 capitalize()함수는 ', () => {
  it('문자열의 첫번째 문자를 대문자로 반환한다.', () => {
    // 두번째 파라미터 : 콜백 / 실제 테스트할 테스트 코드 작성
    const result = utils.capitalize('hello')
    assert.equal(result, 'Hello') // 두 인자가 같은지 검증
  })
  // 첫번째 파라미터 : 어떤 테스트 케이스인지 설명하는 문자열을 넣어줌.

}) // test 대상을 서술식으로 표현함.



