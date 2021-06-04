// 문제요약
// 각 자리의 숫자를 더하기

// 입출력 예시 
// 123 =>	6
// 987 =>	24

// ? 수도코드
// 문자로 바꿔서 for 문 돌린다.
// 숫자를 더한다

// 통과한 코드 (21.06.04)
// 시간복잡도 O(n) / 이유 : 인덱스별 숫자를 더해서
function solution(n) {
  let strNum = String(n);
  let answer = 0
  for (let i = 0; i < strNum.length; i ++) {
    answer = answer + +strNum[i]
  }
  return answer;
}


// 실행코드
console.log(solution(123));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12931