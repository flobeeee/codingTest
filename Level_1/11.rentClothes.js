// 문제요약
// 전체학생수, 체육복 도난당한 학생, 체육복 여벌로 있는 학생을 입력받음
// 여벌로 있는 학생번호는 앞뒤 번호학생에게만 빌려줄 수 있음
// 체육수업을 들을 수 있는 학생의 최댓값 리턴
// ! 주의 도난당한 학생에 여분이 있는 학생이 있으면 본인만 입을 수 있다.

// 입출력 예시 
//5	[2, 4]	[1, 3, 5] => 5
//5	[2, 4]	[3]	=> 4
//3	[3]	[1]	=> 2

// 수도코드
// 1. lost와 reserve 둘다 속하는 학생은 제외한다.
// 2. 전체 학생수에서 lost 학생수를 뺀다.
// 3. reserve 에서 -1 혹은 +1 후에 lost에 일치하면 학생수 count를 늘린다.

// 통과한 코드 (21.05.15)
// 시간복잡도 O(N²) /이중 for문
function solution(n, lost, reserve) {
  lost = lost.sort((a, b) => a-b) // 입력배열이 정렬안되어있는 테스트케이스 있어서 추가
  reserve = reserve.sort((a, b) => a-b)
  for (let i = 0; i < reserve.length; i ++) {
    let count = 0;
    for (let j = 0; j < lost.length; j ++) {
      if (reserve[i] === lost[j]) {
        count ++
        lost.splice(j, 1)
        reserve.splice(i, 1)
        i--
        j--
      }
    }
  }

  let answer = n - lost.length;

  for (let l = 0; l < lost.length; l ++) {
    for (let r = 0; r < reserve.length; r ++) {
      if (reserve[r] -1 === lost[l] ||  reserve[r] +1 === lost[l]) {
        answer ++
        l ++
      }
    }
  }
  return answer;
}


// 실행코드
console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(2, [2, 1], [1, 2])) // -> 
console.log(solution(12, [1, 2, 3, 4, 8, 9, 10, 11], [9, 10] )) // -> 6

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12906