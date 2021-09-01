// 문제요약
// 부서별로 물품을 구매하는 금액 배열이 들어온다.
// 주어진 금액으로 최대 몇개의 부서를 지원할 수 있는 지 리턴

// 입출력 예시 
// [1,3,2,5,4],	9 =>	3
// [2,2,3,3],	10 =>	4

// ? 수도코드


// 통과한 코드 (21.07.00)
function solution(d, budget) {
  const sortArr = d.sort((a, b) => a - b)
  let total = 0
  let answer = 0;
  for (let i = 0; i < sortArr.length; i++) {
    if (total + sortArr[i] > budget) {
      break
    }
    total = total + sortArr[i]
    answer++
  }
  return answer;
}


// 실행코드
console.log(solution([2, 2, 3, 3], 10));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12982