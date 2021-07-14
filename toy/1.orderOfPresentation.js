// 재귀함수
// 김코딩은 모든 조별 발표 순서에 대한 경우의 수를 차례대로 구한 뒤 
// 선생님이 발표 순서를 말하면 이 발표 순서가 몇 번째 경우의 수인지를 대답

// 입출력 예시
// 3, [2, 3, 1] => 3
// 경우의수 [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 3번째와 같으니까 3 리턴

// 수도코드
// 1. 경우의 수에 하나를 추가한다.
// 1-1. 1 ~ N 이 들어있는 배열을 만든다.
// 1-2. 1을 넣는다. 2를 넣는다. 나머지 3을 넣는다.
// 1-3. 1을 넣난다. 3을 넣는다. 나머지 2를 넣는다.
// K 와 일치하는지 확인한 후, 일치하면 인덱스를 리턴한다.

function orderOfPresentation(N, K) {
  let cases = []
  let nums = Array.from(Array(N + 1).keys())
  nums.shift()
  console.log(nums)
  const makeCase = (arr) => {
    let copyNums = arr.slice(0)
    if (arr.length === N) {
      cases.push(arr)
      return
    }
    let arr1 = []
    for (let i = 0; i < N; i++) {
      arr.push(nums[i])

    }
  }
  makeCase([])

  return cases
}

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

// output = orderOfPresentation(5, [1, 3, 2, 4, 5])
// console.log(output); // 6


/*
가위바위보 문제
const rockPaperScissors = function (round) {
  let rounds = round || 3;
  let arr = ["rock", "paper", "scissors"];
  let boxs = []
  const makebox = function (box) {
    if (box.length === rounds) {
      boxs.push(box);
      return box;
    }
    for (let i = 0; i < arr.length; i++){
      makebox(box.concat(arr[i]));
    }
  }
  makebox([]);

  return boxs;
};
*/