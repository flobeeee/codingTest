// 문제요약
// 없는 숫자 더하기
// 0 ~ 9까지의 숫자 중 일부가 들어있는 배열을 받아서
// 0 ~ 9중에 없는 숫자들을 모두 더한 수 리턴
// 제한사항 : 배열 속 모든 수는 서로 다릅니다.

// 입출력 예시 
// [1,2,3,4,6,7,8,0] =>	14 (5, 9)
// [5,8,4,0,6,7,9] =>	6 (1, 2, 3)

// ? 수도코드
// 항상 0~9가 있어야 하는 배열이면 합은 일정함
// 어느정도 모자라는지 리턴

// 통과한 코드 (21.10.25)
function solution(numbers) {
  return 45 - numbers.reduce((a, b) => a + b)
}

// 실행코드
console.log(solution([1,2,3,4,6,7,8,0]));
console.log(solution([5,8,4,0,6,7,9]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/86051