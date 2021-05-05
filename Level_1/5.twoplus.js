// 문제요약
// 정수 배열을 받아 두개의 수를 뽑아 더해 만들수 있는 모든 수
// 오름차순으로 정렬

// 입출력 예시 
// [2,1,3,4,1] =>	[2,3,4,5,6,7]
// [5,0,2,7] =>	[2,5,7,9,12]

// ? 수도코드
// 1. 숫자를 한개 뽑음
// 2. 나머지 인덱스 숫자를 더함
// 3. 오름차수 정렬
// 4. 같은 숫자는 한 개씩만 놔두기

// 통과한 코드 (21.05.05)
// 시간복잡도 O(N) / 모든요소를 다 한번씩 확인해서
function solution(numbers) {
  // 다 더하기
  let plusArr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (i === j) {
        continue;
      } else {
        plusArr.push(numbers[i] + numbers[j])
      }
    }
  }
  // 정렬
  plusArr.sort((a, b) => a - b)
  // 같은 수 제외
  let answer = [];
  for (let i = 0; i < plusArr.length; i++) {
    if (answer[answer.length - 1] !== plusArr[i]) {
      answer.push(plusArr[i])
    }
  }
  return answer;
}

// 리팩토링 (21.05.05)
function solution(numbers) {
  // 다 더하기
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  answer.sort((a, b) => a - b);

  return [...new Set(answer)];
}


// 실행코드
console.log(solution([2, 1, 3, 4, 1]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12906