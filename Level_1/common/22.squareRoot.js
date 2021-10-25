// 문제요약
// 정수 제곱근 판별
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단
// n이 양의 정수 x의 제곱이라면, x+1의 제곱 리턴, 아니면 -1리턴

// 입출력 예시 
// 121 =>	144 (121은 11의 제곱이므로, 11+1의 제곱인 144리턴)
// 3 =>	-1

// ? 수도코드
// 제곱근 구하는 메소드를 사용한다. Math.sqrt()
// 제곱근을 구해서 해당 제곱근과 제곱근을 내림한 수가 같은지 확인해서 양의정수임을 판단
// 제곱근이 양의 정수면 +1해서 제곱한 수를 리턴한다
// 양의정수가 아니면 -1을 리턴한다.

// 통과한 코드 (21.10.25)
function solution(n) {
  // return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1) : -1
  return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1
}


// 실행코드
console.log(solution(121));
console.log(solution(3));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12934