// 문제요약
// 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍
// 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.

// 입출력 예시 
// X	Y	result
// "100"	"2345"	"-1"
// "100"	"203045"	"0"
// "100"	"123450"	"10"

// ? 수도코드


// 통과한 코드 (23.01.16)
function solution(X, Y) {
  let answer = ''
  const xNumber = {}
  const yNumber = {}

  for (let i = 0; i < 10; i++) {
    xNumber[i] = 0
    yNumber[i] = 0
  }

  for (const x of X) {
    xNumber[x] = xNumber[x] + 1
  }

  for (const y of Y) {
    yNumber[y] = yNumber[y] + 1
  }

  // console.log(xNumber)
  // console.log(yNumber)

  for (let i = 9; i >= 0; i--) {
    if (xNumber[i] > 0 && yNumber[i] > 0) {
      if (xNumber[i] >= yNumber[i]) {
        answer = answer + (`${i}`.repeat(yNumber[i]))
      } else {
        answer = answer + (`${i}`.repeat(xNumber[i]))
      }
    }
  } 

  if (answer.length === 0) {
    answer = '-1'
  }

  if (answer.replace(/0/g, "") === "") {
    answer = '0'
  }

  return answer;
}


// 실행코드
console.log(solution("100",	"2345")) // -1
console.log(solution("100",	"203045")) // 0
console.log(solution("100",	"123450")) // 10
console.log(solution("12321",	"42531")) // 321
console.log(solution("5525",	"1255")) // 552
console.log(solution("01000000002", "20200")) // 2000

// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131128