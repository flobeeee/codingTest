// 문제요약
// 구매한 로또 번호중 번호를 확인할 수 없는 부분은 0으로 들어옵니다.
// 당첨번호와 비교하여 최고순위, 최저순위를 각각 리턴합니다.

// 입출력 예시 
// [44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19] =>	[3, 5]
// [0, 0, 0, 0, 0, 0],	[38, 19, 20, 40, 15, 25] =>	[1, 6]
// [45, 4, 35, 20, 3, 9],	[20, 9, 3, 45, 4, 35] =>	[1, 1]

// ? 수도코드
// 입력으로 들어온 두 배열을 정렬합니다.
// 당첨된 번호가 몇개인지 확인합니다.
// 0의 갯수를 더해서 최고순위를 리턴합니다.
// 당첨된 번호 갯수는 최저순위로 리턴합니다.

// 통과한 코드 (21.06.17)
function solution(lottos, win_nums) {
  let count = 0;
  let zeroNum = 0;
  for (let i = 0; i < 6; i ++) {
    if (lottos[i] === 0) {
      zeroNum ++
      continue;
    }
    for (let j = 0; j < 6; j ++) {
      if (win_nums[j] === lottos[i]) {
        count ++
      }
    }
  }
  let max = 7 - count - zeroNum;
  let min = 7 - count;
  if (max === 7) {
    max = 6;
  }
  if (min === 7) {
    min = 6;
  }
  let answer = [max, min];
  return answer;
}


// 실행코드
console.log(solution([44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19]));
console.log(solution([1,2,3,4,5,6],	[38, 19, 20, 40, 15, 25]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/77484