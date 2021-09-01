// 문제요약
// 정수 a, b 가 주어졌을 때, a와 b 사이에 속한 모든 정수의 합

// 입출력 예시 
// 3, 5 => 3 + 4 + 5 = 12
// 3, 3 => 3

// ? 수도코드
// 1. 두 숫자가 같으면 해당 숫자 리턴
// 2. 정렬한다.
// 3. 각 숫자를 더한다.

// 통과한 코드 (21.05.16)
// 시간복잡도 O(N) / 모든요소를 다 한번씩 확인해서
function solution(a, b) {
  let min;
  let max;
  let answer = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }
  while (min <= max) {
    answer = answer + min;
    min ++;
  }
  return answer;
}


// 실행코드
console.log(solution(3, 5));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12912