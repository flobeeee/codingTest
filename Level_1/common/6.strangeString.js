// 문제요약
// 짝수번째 알파벳은 대문자로
// 홀수번째 알파벳은 소문자로
// ! 공백기준으로 인덱스 초기화

// 입출력 예시 
//"try hello world" =>	"TrY HeLlO WoRlD"
// "sp ace" -> "Sp AcE"

// ? 수도코드
// 1. 단어별로 짝수인덱스는 대문자로 변경한다.
// 2. 단어별로 홀수인덱스 소문자로 변경한다.

// 통과한 코드 (21.05.06)
// 시간복잡도 O(N) / 모든요소를 다 한번씩 확인해서
function solution(s) {
  let sArr = s.split('')
  let index = 0;
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === ' ') { // 공백만나면 인덱스 초기화
      index = 0;
    } else if (index % 2 === 0) {
      sArr[i] = sArr[i].toUpperCase();
      index++;
    } else {
      sArr[i] = sArr[i].toLowerCase();
      index++;
    }
  }
  return sArr.join('')
}


// 실행코드
console.log(solution("sp ace"));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12930