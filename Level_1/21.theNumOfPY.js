// 문제요약
// 입력 문자열에서 p와 y의 갯수가 맞으면 true, 다르면 false
// 대소문자 구분 x

// 입출력 예시 
// "pPoooyY" =>	true
// "Pyy" =>	false

// ? 수도코드
// 소문자로 다 변경
// p, y 갯수 세기

// 통과한 코드 (21.05.31)
// 시간복잡도 O(n)  / 처음부터 끝까지 확인하니까
function solution(s) {
  let answer = true;
  let p = 0;
  let y = 0;
  const str = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (str[i] === 'p') {
      p++
    } else if (str[i] === 'y') {
      y++
    }
  }
  if (p !== y) {
    answer = false;
  }
  return answer;
}


// 실행코드
console.log(solution("pPoooyY"));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12916