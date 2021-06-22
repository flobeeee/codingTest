// 문제요약
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수 리턴

// 입출력 예시 
// 10 -> 4
// 5 -> 3

// ? 수도코드
// 1보다 큰 숫자부터 n까지의 소수를 찾는다
// 찾은 경우 카운트를 올린다.

// 통과한 코드 (21.06.22)
// 시간복잡도 O(n) O(n²) O(n log n) / 이유
function solution(n) {
  var answer = 0;
  return answer;
}

// 실행코드
console.log(solution(10));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12921

// 1차시도 : 효율성문제로 3개 테스트항목 통과 X
/*
function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i ++) {
    let count = 0;
    for (let j = 2; j <= i; j ++) {
      if (i % j === 0) {
        count ++;
        if (count > 1) {
          break;
        }
      }
    }
    if (count === 1) {
      answer ++;
      count = 0;
    }
  }
  return answer;
}
*/