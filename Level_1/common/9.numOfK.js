// 문제요약
// 숫자들이 있는 배열을 받아서 i번째 숫자부터 j번째 숫자까지 자르고
// 정렬 후
// k번째 있는 숫자 구하기

// 입출력 예시 
// [1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]] => [5, 6, 3]

// ? 수도코드
// 1. 배열 자르기 (slice)
// 2. 정렬 (sort)
// 3. k번째 수 찾아내기

// 통과한 코드 (21.05.13)
// 시간복잡도 O(N) / 모든요소를 다 한번씩 확인해서
function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    const sliceArr = array.slice(commands[i][0] - 1, commands[i][1])
    sliceArr.sort((a, b) => a - b)
    answer.push(sliceArr[commands[i][2] - 1])
  }
  return answer;
}


// 실행코드
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42748