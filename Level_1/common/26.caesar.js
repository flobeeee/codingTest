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
// String.fromCharCode(65, 66, 67);  // "ABC"

// 통과한 코드 (21.06.07)
// 시간복잡도 O(n) / 각 인덱스 문자를 가져와서 대문자인지 소문자인지 확인 
// 아스키코드를 이용해서 풀기
function solution(s, n) {
  let arrStr = s.split('');
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === ' ') {
      continue;
    }
    // 대문자
    for (let J = 65; J <= 90; J++) {
      if (s[i] === String.fromCharCode(J)) {
        if (J + n > 90) {
          arrStr[i] = String.fromCharCode(J + n - 26)
        } else {
          arrStr[i] = String.fromCharCode(J + n)
        }
      }
    }
    // 소문자
    for (let j = 97; j <= 122; j ++) {
      if(s[i] === String.fromCharCode(j)) {
        if (j + n > 122) {
          arrStr[i] = String.fromCharCode(j + n - 26)
        } else {
          arrStr[i] = String.fromCharCode(j + n)
        }
      }
    }
  }
  return arrStr.join('');
}


// 실행코드
console.log(solution("AB", 1));
console.log(solution("abcdefghijklmnopqrstuvwxyz", 1));
console.log(solution("a B z",	26));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12926

/* 아스키 없이 풀기
function solution(s, n) {
  let eng = 'abcdefghijklmnopqrstuvwxyz';
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