// 문제요약
// 실패율 리턴
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// 입출력 예시 
// 5,	[2, 1, 2, 6, 2, 4, 3, 3] =>	[3,4,2,1,5]
// 4,	[4,4,4,4,4] =>	[4,1,2,3]

// ? 수도코드
// stages 를 정렬한다.
// 스테이지 1의 실패율을 구해서 객체로 저장한다.
// 스테이지 2의 실패율을 구해서 객체로 저장한다.
// 반복한 뒤에 실패율이 높은 순으로 정렬한다.

// 통과한 코드 (21.07.28)
function solution(N, stages) {
  var answer = {};
  let stay = 0
  let users = stages.length
  let flag = true
  let stage = 1
  let user = 0
  const sortStages = stages.sort((a, b) => a - b)

  while (flag) {
    if (stage > N) {
      flag = false
    } else if (stage === sortStages[user]) {
      user++
      stay++
    } else {
      answer[stage] = stay / users
      stage++
      users = users - stay
      stay = 0
    }
  }
  return answer;
}


// 실행코드
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript