// 문제요약
// 문자열을 정수로 반환
// 문자열 맨 앞에는 부호(+, -)가 올 수있음

// 입출력 예시 
// "1234" => 1234
// "-1234"이면 => -1234

// ? 수도코드
// Number() 을 사용한다.

// 통과한 코드 (21.05.27)
// 시간복잡도 O(1) / 이유: 어떤 문자열이 들어오든 연산횟수는 1번이다.
function solution(s) {
  return Number(s)
}


// 실행코드
console.log(solution("1234"));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12925