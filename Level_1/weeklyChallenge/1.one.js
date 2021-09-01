// 문제요약
// 놀이공원의 이용료는 price
// 놀이기구를 N번째 이용한다면 원래 이용료의 N배를 내야함
// count번 타면 자신의 돈에서 얼마가 모자라는지 리턴 (금액이 부족하지 않으면 0 리턴)

// 입출력 예시 
// price, money, count => result
// 3, 20, 4 => 10

// ? 수도코드
// 1. count를 for문으로 돌려서 count * price 를 더한다
// 2. money에서 1에서 구한 값을 빼서 음수인 경우 양수로 리턴, 양수면 0 리턴 

// 통과한 코드 (21.09.01)
function solution(price, money, count) {
  let answer = 0
  let total = 0
  for (let i = 1; i <= count; i++) {
    total = total + i * price
  }
  if (money - total < 0) {
    answer = Math.abs(money - total)
  }

  return answer;
}


// 실행코드
console.log(solution(3, 20, 4)); // 10

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/82612