// 문제요약
// 숫자를 받아서 3진법으로 바꾸고, 숫자를 뒤집어서, 다시 10진법으로 리턴

// 입출력 예시 
// 45 =>	7
// 125 =>	229

// ? 수도코드
// 1. 숫자를 3진법으로 변환합니다.
// 2. 변환한 숫자를 뒤집습니다.
// 3. 10진법으로 변환해서 리턴합니다.

// 통과한 코드 (21.07.27)
function solution(n) {
  const toThree = (n.toString(3)).split("").reverse().join("")
  return parseInt(toThree, 3)
}

// 실행코드
console.log(solution(45));
console.log(solution(125))
// 테스트케이스10은 [입력값:78413450 , 기댓값:110105530] 입니다.
console.log(solution(78413450));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/68935?language=javascript