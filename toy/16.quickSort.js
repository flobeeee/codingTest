// 퀵정렬 구현
// 1. 기준 숫자를 하나 정합니다.
// 2. 1에서 뽑은 숫자보다 작으면 왼쪽, 크면 오른쪽으로 분류합니다.
// 3. 왼쪽 혹은 오른쪽으로 분류한 배열들을 1부터 다시 분류합니다.

function quickSort(arr) {
  let left = [];
  let mid = arr[0];
  let right = [];
  if (arr.length < 2) {
    return arr;
  } else if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return [arr[1], arr[0]];
    } else {
      return arr;
    }
  } else {
    for (let i = 1; i < arr.length; i ++) {
      if (arr[0] > arr[i]) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...quickSort(left), mid, ...quickSort(right)]
  }
}

console.log(quickSort([3, 1, 21])) // [1, 3, 21]
console.log(quickSort([5, 4, 3, 2, 1])) // [1, 2, 3, 4, 5]