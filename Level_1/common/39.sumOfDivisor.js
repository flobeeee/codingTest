// 문제요약
// 약수의 합
// 정수 n을 입력받아 n의 약수를 모두 더해서 리턴
// 약수 : 어떤 수를 나누었을 때 나머지가 0이 되는 수

// 입출력 예시 
// 12 => 28 (1,2,3,4,6,12)
// 5 =>	6 (1,5)

// ? 수도코드
// n을 1부터 n까지 나눠보고 나머지가 0 인 경우에 더하기

// 통과한 코드 (21.10.25)
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer = answer + i
    }
  }
  return answer;
}

// 실행코드
console.log(solution(12));
console.log(solution(5));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12928