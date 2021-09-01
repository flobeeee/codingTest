// 문제요약
// 자연수를 뒤집어 배열로 만드시오

// 입출력 예시 
// 12345 => [5,4,3,2,1]

// ? 수도코드
// for 문으로 뒤 숫자부터 배열에 넣는다.

// 통과한 코드 (21.06.04)
// 시간복잡도 O(n) / 이유 하나씩 배열에 넣으니까
function solution(n) {
  let strN = String(n)
  let answer = [];
  for (let i = strN.length-1; i >= 0; i --) {
    answer.push(Number(strN[i]))
  }
  return answer;
}

// 실행코드
console.log(solution(12345));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12932