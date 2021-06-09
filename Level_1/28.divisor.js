// 문제요약
// 두 정수가 left 와 right 로 주어짐
// left 에서 right 까지의 수 중에서 약수의 개수가 짝수면 더하고, 홀수면 빼기

// 입출력 예시 
// 13,	17 =>	43
// 24,	27 =>	52

// ? 수도코드
// left 수부터 약수의 개수룰 구해서 짝수면 더하고 홀수면 뺀다
// left +1 의 약수의 개수를 구해서 짝수면 더하고 홀수면 뺀다

// 통과한 코드 (21.06.09)
// 시간복잡도 O(n²) / left 부터 right 사이의 숫자를 하나 놓고 1부터 해당 숫자까지 다 확인해서
function solution(left, right) {
  let answer = 0;
  let count = 0;
  for (left; left <= right; left++) {
    for (let i = left; i > 0; i--) {
      if (left % i === 0) {
        count++
      }
    }
    if (count % 2 === 0) {
      answer = answer + left;
      count = 0
    } else {
      answer = answer - left;
      count = 0
    }
  }
  return answer;
}

// 실행코드
console.log(solution(13, 17));
console.log(solution(24, 27));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/77884