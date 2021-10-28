// 문제요약
// 다트게임 (점수 계산 로직)
// 다트를 세 차례 던진다.
// 각 기회마다 0~10점까지 얻을 수 있다.
// S, D, T 영역이 존재하고 각 영역 당첨 시 (점수 1제곱 , 점수 2제곱 , 점수 3제곱)으로 계산
// 옵션으로 스타상(*), 아차상(#)이 있고, 스타상은 해당점수와 바로전 점수 2배로 만든다. 하차상은 해당점수 마이너스 2배

// 입출력 예시 
// dartResult	answer	설명
// 1S2D*3T =>	37    	
// 1D2S#10S =>	9
// 1D2S0T =>	3
// 1S*2T*3S =>	23 
// 1D#2S*3S =>	5
// 1T2D3D# =>	-4
// 1D2S3T* =>	59

// ? 수도코드
// 숫자인지 확인한다.
// 영역을 확인해서 점수를 제곱한다.
// 옵션유무를 확인해서 있는경우 점수를 적용한다.

// 통과한 코드 (21.10.28)
function solution(dartResult) {
  let answer = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      let number = Number(dartResult[i])
      if (number === 1 && Number(dartResult[i + 1]) === 0) {
        number = 10
        i ++
      }
      if (dartResult[i + 1] === 'S') {
        answer.push(number)
      } else if (dartResult[i + 1] === 'D') {
        answer.push(number ** 2)
      } else {
        answer.push(number ** 3)
      }
      // 옵션
      if (dartResult[i + 2] === '*') {
        answer[answer.length - 1] = answer[answer.length - 1] * 2
        if (answer.length > 1) {
          answer[answer.length - 2] = answer[answer.length - 2] * 2
        }
      } else if (dartResult[i + 2] === '#') {
        answer[answer.length -1] = answer[answer.length -1] * -1
      }
    }
  }
  return answer[0] + answer[1] + answer[2];
}

// 실행코드
console.log(solution('1S2D*3T')); // 37
console.log(solution('1D2S#10S')); // 9
console.log(solution('1D2S0T')); // 3

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/17682