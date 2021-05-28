// 문제요약
// string 형 배열에서 Kim 의 위치 찾기
// 인덱스를 찾아서 해당 인덱스에 있다고 리턴

// 입출력 예시 
// ["Jane", "Kim"] =>	"김서방은 1에 있다"

// ? 수도코드
// index 위치를 찾는다

// 통과한 코드 (21.05.28)
// 시간복잡도 O(n) / 처음부터다 확인해서
function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      return `김서방은 ${i}에 있다`;
    }
  }
}


// 실행코드
console.log(solution(["Jane", "Kim"]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12919