// 문제요약
// 문자열 s의 길이가 4 혹은 6이고
// 숫자로만 구성되어있으면 true, 그 외 false

// 입출력 예시 
// "a234" =>	false
// "1234" =>	true
// "12345" =>	true 길이 안맞음

// ? 수도코드
// 타입이 숫자면 true

// 통과한 코드 (21.05.27)
// 시간복잡도 O(N) O(N²) O(n log n) / 이유
function solution(s) {
  let answer = false;
  if (s.length === 4) {
    if (s - 1 < s && s > 999) {
      answer = true;
    }
  } else if (s.length === 6) {
    if (s - 1 < s && s > 99999) {
      answer = true;
    }
  }
  return answer;
}


// 실행코드
console.log(solution("a234"));
console.log(solution("5.1153")); // 테스트 진짜 지저분..

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12918
