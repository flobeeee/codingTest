// 문제요약
// 각 알파벳을 일정한 거리만큼 밀어서 
// 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다

// 입출력 예시 
// "AB",	1 =>	"BC"
// "z",	1 =>	"a"
// "a B z",	4 =>	"e F d"

// ? 수도코드
// 대문자인지 확인 후 일정한 거리의 알파벳을 찾는다
// 소문자인지 확인 후 일정한 거리의 알파벳을 찾는다
// 빈공백인 경우 빈공백도 출력한다. ( 공백 여러개 적용필수 )

// 통과한 코드 (21.00.00)
// 시간복잡도 O(n) O(n²) O(n log n) / 이유
// 3차 도전 아스키코드를 이용해서 풀어야 할 것 같음.
function solution(s, n) {
  var answer = '';
  return answer;
}


// 실행코드
console.log(solution("AB", 1));
console.log(solution("AaZz",	1));
console.log(solution("a B z",	26));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12926
/* 2 차시도 : 테스트 통과가 안됨. 
function solution(s, n) {
  let arrStr = s.split('')
  let eng = 'abcdefghijklnmopqrstuvwxyz';
  let ENG = eng.toUpperCase();
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === ' ') {
      continue;
    }
    for (let lower = 0; lower < eng.length; lower ++) {
      if (s[i] === eng[lower]) {
        arrStr[i] = eng[(lower+n) % 26]
      }
    }
    for (let upper = 0; upper < ENG.length; upper ++) {
      if (s[i] === ENG[upper]) {
        arrStr[i] = ENG[(upper+n) % 26]
      }
    }
  }
  return arrStr.join('');
}
*/

/* 1 차시도 : 공백이 2개면 2개의 공백을 넣고 싶은데 먹히지 않음
function solution(s, n) {
  let eng = 'abcdefghijklnmopqrstuvwxyz';
  let ENG = eng.toUpperCase();
  let answer = ''
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === ' ') {
      answer = answer + ' '
    }
    for (let lower = 0; lower < eng.length; lower ++) {
      if (s[i] === eng[lower]) {
        answer = answer + eng[(lower+n) % 26]
      }
    }
    for (let upper = 0; upper < ENG.length; upper ++) {
      if (s[i] === ENG[upper]) {
        answer = answer + ENG[(upper+n) % 26]
      }
    }
  }
  return answer;
}
*/