// 문제요약
// 정수 x와 자연수 n을 입력받는다.
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트 리턴

// 입출력 예시 
// 2,	5 =>	[2,4,6,8,10]
// 4,	3 =>	[4,8,12]
// -4,	2 =>	[-4, -8]

// ? 수도코드
// x부터 시작해서 x씩 더한 수를 배열에 넣습니다.
// 배열의 길이가 n이 되면 해당 배열을 리턴합니다.

// 통과한 코드 (21.06.14)
// 시간복잡도 O(n) / 이유 n번 만큼 작업해야해서!
function solution(x, n) {
  let answer = [x];
  for (let i = 1; i < n; i ++) {
    answer.push(answer[answer.length-1] + x)
  }
  return answer;
}


// 실행코드
console.log(solution(2,	5));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12954