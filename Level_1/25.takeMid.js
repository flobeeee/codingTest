// 문제요약
// 가운데 글자 가져오기

// 입출력 예시 
// "abcde" =>	"c"
// "qwer" =>	"we"

// ? 수도코드
// 글자 길이가 홀수면 한글자를 리턴
// 짝수면 중간 -0.5 +0.5 인덱스 가져와서 리턴

// 통과한 코드 (21.06.04)
// 시간복잡도 O(1) 
function solution(s) {
  let index = Math.floor(s.length/2) 
  if (s.length % 2 === 1) {
    return s[index]
  } else {
    return s[index -1] + s[index]
  }
}


// 실행코드
console.log(solution("abcde"));
console.log(solution("qwer"));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12903