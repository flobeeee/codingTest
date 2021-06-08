// 문제요약
// 제일 작은 수를 제거하고 리턴
// 빈배열이면 배열에 -1 넣어서 리턴

// 입출력 예시 
// [4,3,2,1] =>	[4,3,2]
// [10] =>	[-1]

// ? 수도코드
// 길이가 1개면 [-1] 리턴
// 제일 작은 숫자를 찾아낸다.

// 통과한 코드 (21.06.08)
// 시간복잡도 O(n) / 이유 제일 작은 숫자빼고 나머지 숫자를 새로운 배열에 넣어서
function solution(arr) {
  if (arr.length === 1) {
    return [-1]
  }
  let answer = []
  const min = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i])
    }
  }

  return answer
}

// 실행코드
console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12935
