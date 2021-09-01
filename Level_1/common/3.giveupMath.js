// 문제요약
// 3명의 수포자들은 정답을 찍는 방식이 일정합니다.
// 정답을 많이 맞힌 사람이 누구인지 출력, 여러명일 경우 오름차순으로 출력
// 1번 수포자: 1, 2, 3, 4, 5, ...(반복)
// 2번 수포자: 2, 1, 2, 3, 2, 4, 2, 5, ...(반복)
// 3번 수포자: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...(반복)

// 입출력 예시 
// [1, 2, 3, 4, 5] => [1]
// [1, 3, 2, 4, 2] => [1, 2, 3]

// ? 수도코드
// 1번 수포자의 방식으로 맞춘 문제수를 구합니다.
// 2번 수포자의 방식으로 맞춘 문제수를 구합니다.
// 3번 수포자의 방식으로 맞춘 문제수를 구합니다.
// 맞춘 문제수를 비교하여 제일 많이 맞춘 사람을 출력합니다.

// 통과한 코드 (21.05.03)
// 시간복잡도 O(N) / 모든요소를 다 한번씩 확인해서
function solution(answers) {
  let countA = 0;
  let countB = 0;
  let countC = 0;

  const answerB = [2, 1, 2, 3, 2, 4, 2, 5];
  let arrnumB = 0;

  const answerC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    // 1번 수포자
    if (answers[i] === i % 5 + 1) {
      countA++
    }
    // 2번 수포자
    if (answers[i] === answerB[arrnumB]) {
      countB++
    }
    arrnumB++
    if (arrnumB > 7) {
      arrnumB = 0;
    }
    // 3번 수포자
    if (answers[i] === answerC[i % 10]) {
      countC++
    }
  }

  var answer = [];
  // 점수 비교하기
  const score = Math.max(countA, countB, countC);
  if (countA === score) {
    answer.push(1)
  }
  if (countB === score) {
    answer.push(2)
  }
  if (countC === score) {
    answer.push(3)
  }

  return answer;
}

// 리팩토링 힌트 : filter 이용해보기


// 실행코드
console.log(solution([1, 3, 2, 4, 2]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42840