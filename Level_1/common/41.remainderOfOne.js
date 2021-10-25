// 문제요약
// 나머지가 1이 되는 수 찾기
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x 리턴
// 답은 항상 존재함
// 제한사항 : 3<= n <= 1,000,000

// 입출력 예시 
// 10 => 3
// 12 => 11

// ? 수도코드
// 1부터 하나씩 늘려가면서 n을 나눠서 나머지가 1이되면 바로 리턴

// 통과한 코드 (21.10.25)
function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return i
    }
  }
}

// 실행코드
console.log(solution(10));
console.log(solution(12));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/87389