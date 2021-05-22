// 문제요약
// 길이가 n 이고 "수박수박수박수..." 같은 패턴을 유지하는 문자열

// 입출력 예시 
// 3 =>	"수박수"
// 4 =>	"수박수박"

// ? 수도코드
// while 문으로 홀수번째는 '수'
// 짝수번째는 '박' 을 넣는다.

// 통과한 코드 (21.05.22)
// 시간복잡도 O(N) 모든요소를 다 한번씩 확인해서
function solution(n) {
  let answer = ''
  while (answer.length < n) {
    answer.length % 2 === 0 ? answer = answer + '수' : answer = answer + '박'
  }
  return answer;
}


// 실행코드
console.log(solution(6));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12922