// 문제요약
// 배열요소가 divisor로 딱 나누어 떨어지는 값만 오름차순정리
// 값이 없다면 [-1]을 리턴한다.

// 입출력 예시 
// [2, 36, 1, 3]	1 =>	[1, 2, 3, 36]
// [3,2,6]	10 =>	[-1]

// ? 수도코드
// 1. filter 를 이용해 나누어 떨어지는 숫자를 만든다.
// 2. 값이 있으면 오름차순으로 정렬한다.
// 3. 값이 없으면 -1을 리턴한다.

// 통과한 코드 (21.04.30)
// 시간복잡도 O(N) / 모든요소를 다 한번씩 확인해서
function solution(arr, divisor) {
  // 배열의 요소가 divisor 로 나누어 떨어지면
  // 해당 요소들을 모아서 리턴한다.
  let answer = arr.filter(ar => {
    if (ar % divisor === 0) {
      return ar
    }
  })
  if (answer.length === 0) {
    return [-1]
  }
  return answer.sort((a, b) => {
    return a - b
  })
}

// 리팩토링 (21.04.30)
// 시간복잡도 O(N) / for 문으로도 충분히 잘 돌아간다.
function solution(arr, divisor) {
  let answer = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i])
    }
  }
  return answer.length !== 0 ?
    answer.sort((a, b) => a - b) : [-1]
}

// 실행코드
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([5, 9, 7, 10], 5)) // ! answer.sort() 로만 작성하면 [10, 5] 출력
console.log(solution([3, 2, 6], 10));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12910