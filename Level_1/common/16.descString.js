// 문제요약
// 문자열 내림차순
// 소문자 - > 대문자 순서

// 입출력 예시 
// "Zbcdefg" =>	"gfedcbZ"

// ? 수도코드
// 소문자와 대문자를 분리한다.
// 내림차순으로 정렬하고 join 한다.

// 통과한 코드 (21.05.25)
// 시간복잡도 O(N) / 문자열 인덱스마다 확인하니까
function solution(s) {
  let upper = [];
  let lower = [];
  s.split("").map(el => {
    el.toUpperCase() === el ? upper.push(el) : lower.push(el)
  })
  return lower.sort((a, b) => a > b ? -1 : 1).join("") + upper.sort((a, b) => a > b ? -1 : 1).join("")
}

// 리팩토링 (21.05.25)
function solution(s) {
  let upper = [];
  let lower = [];
  s.split("").map(el => {
    el.toUpperCase() === el ? upper.push(el) : lower.push(el)
  })
  return lower.sort().reverse().join("") + upper.sort().reverse().join("")
}

// 실행코드
console.log(solution("Zbcdefg"));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12917