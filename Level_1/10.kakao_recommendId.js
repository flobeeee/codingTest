// 문제요약
// 아이디 추천 프로그램
// 규칙 1. 길이 3~15 
// 규칙 2. 알파벳소문자, 숫자, -_. 만 가능
// 규칙 3. .는 처음과 끝에 사용 X, 연속으로 사용 X

// 네오가 설계한 7단계 처리과정
// 1. 소문자로 변경
// 2. 규칙2에 없는 기호들 제거
// 3. ... => .
// 4. 처음과 끝에 위치한 . 제거
// 5. 빈 문자열은 a를 대입
// 6. 16자 이상이면 첫 15개문자만 살리기
// 7. 2자 이하면 마지막 문자를 길이가 3이 될때까지 반복해서 늘리기

// 입출력 예시 
// "...!@BaT#*..y.abcdefghijklm" =>	"bat.y.abcdefghi"
// "z-+.^." =>	"z--"
// "=.=" =>	"aaa"

// 통과한 코드 (21.05.14)
// 시간복잡도 O(N) / 모든요소를 다 한번씩 확인해서
function solution(new_id) {
  let answer = '';
  const unused = '~!@#$%^&*()=+[{]}:?,<>/'
  const arr = new_id.toLowerCase().split('') // 1. 소문자로 변경
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < unused.length; j++) {
      if (arr[i] === unused[j]) {
        count++;
      }
    }
    if (count === 0) { // 2. 특수문자 제거
      if (answer[answer.length - 1] === '.' && arr[i] === '.') {
        continue; // 3. 중복문자 제거
      } else {
        answer = answer + arr[i];
      }
    }
  }

  if (answer[0] === '.') { // 4. 처음과 끝이 . 이면 제거
    answer = answer.slice(1)
  }
  if (answer[answer.length - 1] === '.') {
    answer = answer.slice(0, answer.length - 1)
  }

  if (answer === '') { // 5. 빈문자열은 a 대입
    answer = 'aaa';
  } else if (answer.length > 15) { // 6. 16자 이상이면 15까지만 살리기
    answer = answer.slice(0, 15);
    if (answer[answer.length - 1] === '.') {
      answer = answer.slice(0, answer.length - 1)
    }
  } else if (answer.length < 2) { // 7. 2자 이하면 맨끝문자로 중복시키기
    answer = answer[0] + answer[0] + answer[0];
  } else if (answer.length < 3) {
    answer = answer + answer[answer.length - 1];
  }

  return answer;
}


// 실행코드
console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."))
console.log(solution("=.="))
console.log(solution("123_.def"))
console.log(solution("abcdefghijklmn.p"))
console.log(solution(".......b")) // 'bbb'

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/72410