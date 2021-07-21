// 문제요약
// 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 입력 
// s가 의미하는 원래 숫자를 return

// 입출력 예시 
// "one4seveneight" =>	1478
// "23four5six7" =>	234567
// "2three45sixseven" =>	234567
// "123" =>	123

// ? 수도코드
// 1. 인덱스 0 이 숫자인지 아닌지 확인한다.
// 2. 숫자인 경우, 그대로 answer에 추가한다.
// 3. 문자인 경우, 두번째 인덱스 까지 확인해서 숫자로 변환한다.
// 4. 문자인 경우, 문자열 숫자만큼 인덱스를 넘긴다.

// 통과한 코드 (21.07.21)
function solution(s) {
  const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let answer = ''
  for (let i = 0; i < s.length; i++) {
    // 문자인 경우
    if (!word[s[i]]) {
      for (let j = 0; j < word.length; j++) {
        if (s.slice(i, i + 2) === word[j].slice(0, 2)) {
          answer = answer + j
          i = i + word[j].length - 1
          break
        }
      }
    } else {
      answer = answer + s[i]
    }
  }
  return +answer;
}

// 실행코드
console.log(solution("23four5six7"));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/81301