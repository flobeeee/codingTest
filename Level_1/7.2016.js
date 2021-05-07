// 문제요약
// 2016년은 윤년이다. (2월을 29일로 둔 해)
// a월 b일이 무슨요일인지 리턴
// 1월 1일은 금요일

// 입출력 예시 
// 5, 24 =? "TUE"

// ? 수도코드
// 1. 입력받은 월 전까지의 일자를 다 더한다.
// 2. 입력받은 일을 더한다.
// 3. 7로 나눠서 나머지에 해당하는 인덱스 요일을 리턴한다.

// 통과한 코드 (21.05.07)
// 시간복잡도 O(N)
function daysInMonth(month) {
  if (month < 1) {
    return 0;
  } else if (month === 2) {
    return 29;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
}

function solution(a, b) {
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let sumDay = 0;
  for (let i = 0; i < a; i++) {
    sumDay = sumDay + daysInMonth(i);
  }
  sumDay = sumDay + b - 1
  return days[sumDay % 7];
}


// 실행코드
console.log(solution(5, 24)); // "TUE"
console.log(solution(2, 1)); // "MON"
console.log(solution(1, 1))

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12901