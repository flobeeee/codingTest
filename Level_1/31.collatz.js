// 문제요약
// 콜라츠 추측 (아래 작업을 하면 모든 수를 1로 만들 수 있다는 추측)
// 1. 입력된 수가 짝수면 2로 나눕니다.
// 2. 입력된 수가 홀수면 3을 곱하고 1을 더합니다.
// 3. 이 작업을 1이 될 때까지 반복합니다.
// 위 작업을 몇 번해야 하는지 반환하라. 
// 500번을 반복해도 1이 되지 않는다면 -1을 반환하라.

// 입출력 예시 
// 6 -> 8
// 16 -> 4
// 626331 -> -1

// ? 수도코드
// 재귀의 기초 num이 1이 되거나, answer이 500이상이 되면 리턴한다.
// 콜라츠 추측의 조건들을 구현한다.

// 리팩토링 (21.08.16) 
// 코드반복 지양하기 (1함수 1리턴 규칙 적용)
function solution(num) {
  let answer = 0;
  const collatz = function(num) {
    if (num === 1) {
      return answer;
    } else if (answer >= 500) {
      return -1;
    }
    answer ++;
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 !== 0) {
      num = num * 3 + 1;
    }
    return collatz(num)
  }
  return collatz(num)
}

// 실행코드
console.log(solution(6));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12943

// 통과한 코드 (21.06.12)
// 시간복잡도 O(1) / 아무리 반복해도 500회까지만 작동하니까. O(500) 이다. O(500) = O(1)
// function solution(num) {
//   let answer = 0;
//   const collatz = function(num) {
//     if (num === 1) {
//       return answer;
//     } else if (answer >= 500) {
//       return -1;
//     }
//     answer ++;
//     if (num % 2 === 0) {
//       num = num / 2;
//       return collatz(num)
//     } else {
//       num = num * 3 + 1;
//       return collatz(num)
//     }
//   }
//   return collatz(num)
// }