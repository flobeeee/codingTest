// 문제요약
// 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거

// 입출력 예시 
// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

// ? 수도코드
// 1. 새로만들어진 배열과 인풋으로 들어온 배열을 확인한다.
// 2. 새로만들어진 배열의 마지막 요소와 인풋의 요소를 비교하여
// 3. 같지않으면 새로운 배열에 넣는다.

// 통과한 코드 (21.04.29)
// 시간복잡도 O(N) / 모든요소를 다 한번씩 확인해서
function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i])
    }
  }

  return answer;
}


// 실행코드
console.log(solution([1, 1, 3, 3, 0, 1, 1]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12906