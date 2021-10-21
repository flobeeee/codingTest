// 문제요약
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.

// 입출력 예시 
// 3,	12 =>	[3, 12]
// 2,	5 =>	[1, 10]

// ? 수도코드
// 1. 작은 수의 약수를 구한다
// 1-1. 큰 약수부터 큰 수를 나눠 보고 0으로 떨어지면 그 수가 최대공약수
// 2. 큰 수를 작은 수로 나눠서 딱 떨어지면 큰 수가 최소공배수
// 2-1. 딱 떨어지지 않으면, 두 수를 곱해서 최대공약수로 나눈 수가 최소공배수

// 통과한 코드 (21.10.21)
function solution(n, m) {
  let big = n > m ? n : m
  let small = n < m ? n : m
  let answer = [];
  for (let i = small; i > 0; i--) {
    if (big % i === 0 && small % i === 0) {
      answer.push(i)
      break
    }
  }
  if (big % small === 0) {
    answer.push(big)
  } else {
    answer.push(big * small / answer[0])
  }
  return answer;
}

// 실행코드
console.log(solution(3, 12));
console.log(solution(2, 5));
console.log(solution(4, 6)); // [2, 12]

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12940