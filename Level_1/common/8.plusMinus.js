// 문제요약
// 숫자가 들어있는 배열과 불리언이 들어있는 배열을 입력받는다
// true 면 해당 인덱스에 있는 숫자는 양수이고, false 면 음수이다.
// 숫자들을 다 더한 결과를 리턴

// 입출력 예시 
// [4,7,12], [true,false,true] =>	9
// [1,2,3], [false,false,true] =>	0

// ? 수도코드
// i번째 요소를 각각 확인한다.
// 더한다.

// 통과한 코드 (21.05.11)
// 시간복잡도 O(N) / 모든요소를 다 한번씩 확인해서
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer = answer + absolutes[i];
    } else {
      answer = answer - absolutes[i];
    }
  }
  return answer;
}


// 실행코드
console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]))

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript