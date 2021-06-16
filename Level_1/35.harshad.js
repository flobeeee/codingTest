// 문제요약
// 양의 정수 x가 하샤드 수이려면
// x의 자릿수의 합으로 x가 나누어져야 합니다.

// 입출력 예시 
// 10 =>  true
// 12 => true
// 11 => false
// 13 => false

// ? 수도코드
// 입력값의 각 자릿수의 합을 구합니다.
// 구한 수로 입력값을 나눠서 딱 떨어지면 true 리턴

// 통과한 코드 (21.06.16)
function solution(x) {
  let answer = true;
  let str = String(x);
  let sum = 0;
  for (let i = 0; i < str.length; i ++) {
    sum = sum + Number(str[i]);
  }
  if (x % sum !== 0) {
    answer = false;
  }
  return answer;
}


// 실행코드
console.log(solution(11));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12947