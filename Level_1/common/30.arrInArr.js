// 문제요약
// 행렬의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더하기

// 입출력 예시 
// [[1,2],[2,3]],[[3,4],[5,6]] =>[[4,6],[7,9]]
// [[1],[2]],[[3],[4]] =>[[4],[6]]

// ? 수도코드
// [0][0] 끼리의 합을 더한다.
// [n][n] 까지 반복한다.

// 통과한 코드 (21.06.11)
// 시간복잡도 O(n) / 이유 요소를 하나씩 확인해서 더하기 때문에
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i ++) {
    let sum = []
    for (let j = 0; j < arr1[i].length; j ++) {
      sum.push(arr1[i][j] + arr2[i][j])
    }
    answer.push(sum)
    sum = []
  }
  return answer;
}


// 실행코드
console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12950