// 문제요약
// 마라톤 참가자와 완주자 배열이 각각 주어지는데
// 단 한 명의 선수는 완주하지 못했다. 해당 선수 출력

// 입출력 예시 
// ["leo", "kiki", "eden"]	["eden", "kiki"] =>	"leo"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"] =>	"mislav"

// ? 수도코드
// 1. 이름순으로 정렬한다.
// 2. 같은 인덱스로 비교하서 다르면 해당 participant 이름을 출력한다.

// 통과한 코드 (21.05.04)
// 시간복잡도 O(N) / 모든요소를 다 한번씩 확인해서
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}


// 실행코드
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42576
