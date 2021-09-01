// 문제요약
// 정수를 담고 있는 배열의 평균값 리턴

// 입출력 예시 
// [1,2,3,4] => 2.5
// [5,5] => 5

// ? 수도코드
// 요소를 다 더한다.
// 배열 갯수로 나눈다.

// 통과한 코드 (21.07.01)
// 시간복잡도 O(n) / 요소마다 다 더해서
function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i ++) {
    answer = answer + arr[i];
  }
  return answer/arr.length;
}


// 실행코드
console.log(solution([1, 2, 3, 4]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12944