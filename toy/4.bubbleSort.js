// 버블정렬을 구현
// 버블정렬 알고리즘은 아래와 같습니다. 
// 1. 첫 번째 요소가 두 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
// 2. 두 번째 요소와 세 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
// 3. 1, 2를 마지막까지 반복합니다. (마지막에서 두 번째 요소와 마지막 요소를 비교)
// 4. 1~3의 과정을 한 번 거치게 되면, 가장 큰 요소가 배열의 마지막으로 밀려납니다.
// 5. 1~3의 과정을 첫 요소부터 다시 반복합니다.
// 6. 5를 통해 두 번째로 큰 요소가 배열의 마지막 바로 두 번째로 밀려납니다.
// 7. 1~3의 과정을 총 n번(배열의 크기) 반복합니다.

function bubbleSort(arr) {
  let isSwap = false;
  for (let i = 0; i < arr.length-1; i ++) {
    let first = arr[i];
    let second = arr[i+1]
    if (arr[i] <= arr[i+1]) {
      continue
    } else {
      arr[i] = second;
      arr[i+1] = first;
      isSwap = true;
    }
  }
  if (!isSwap) {
    return arr;
  } else {
    return bubbleSort(arr);
  }
}

console.log(bubbleSort([2, 1, 2, 3])) // [1, 2, 2, 3]
console.log(bubbleSort([5, 4, 3, 2, 1])) // [1, 2, 3, 4, 5]