// 문제요약
// 0 또는 양의정수들이 담긴 배열을 받아서
// 정수들을 이어붙여서 가장 큰 수 리턴

// 입출력 예시 
// [6, 10, 2] => 6210
// [3, 30, 34, 5, 9] =>	"9534330"

// ? 수도코드
// 1. sort 정렬
// 2. 합치기

// 통과한 코드 (21.05.17)
// 시간복잡도 O(N²) / sort 니까..
// 시도 2
function solution(numbers) {
  let answer = numbers.sort((a, b) => {
    if (String(a) + String(b) > String(b) + String(a)) {
      return -1;
    } else {
      return 1;
    }
  })
  if (answer[0] === 0) {
    return String(0)
  }
  return answer.join("")
}


// 실행코드
console.log(solution([3, 30, 34])); // 34330
console.log(solution([0, 0, 0, 0, 0, 0])) // 0

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42746

// ! 시도 1 미완성
// 1. 9로 시작하는 숫자 후보 배열에 넣기
// 2. 후보배열 정렬 (중위순회 트리)
// 3. 이어붙이기
// 4. 8로 시작하는 숫자 1~3 반복 (재귀)

/*
function sortmaker(arr) { // 트리 만들어서 중위순회 하면됨.. 다른방법 없을까?
  let result = [];
  let moreArr = [];
  let lessArr = [];
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {

  }
  return result;
}

function solution(nums) {
  let answer = '';
  let nominatedArr = [];
  let pick = 9;
  const select = pick => {
    if (pick < 0) {
      return;
    }
    nominatedArr = nums.filter(num => {
      if (String(num)[0] === String(pick)) {
        return String(num);
      }
    })
    sortmaker(nominatedArr).map(ar => {
      answer = answer + ar
    })
    nominatedArr = [];
    select(pick - 1)
  }
  select(pick);
  return answer;
}
*/