// 문제요약
// 길이가 같은 두 1차원 배열 a,b 가 매개변수
// a와 b의 내적을 return
// a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]

// 입출력 예시 
// [1,2,3,4],	[-3,-1,0,2] =>	3
// [-1,0,1],	[1,0,-1] =>	-2

// ? 수도코드
// 두 배열의 같은 인덱스 끼리 곱한다
// 곱한 결과끼리 더한다

// 통과한 코드 (21.05.28)
// 시간복잡도 O(n) / 배열요소를 처음부터 끝까지 다 확인해서
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer = answer + (a[i] * b[i])
  }
  return answer;
}


// 실행코드
console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/70128
