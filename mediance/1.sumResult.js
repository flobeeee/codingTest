// 문제요약
// 두 개의 합이 특정 숫자가 되는 값을 리턴
// 배열 안에는 중복이 없고 증감되는 숫자로 되어있음
// 2가지 로직을 생각해보기

// 입출력 예시 
// [1, 3, 5, 6, 7, ..., 30], 33 => [[3, 30], [5, 25] , ...]
// [1, 2, 6, 7, 9, 11, 12], 13 => [[1, 12], [2, 11], [6, 7]]

// ? 첫 번째 수도코드
// 1. 처음과 끝 숫자를 확인해서 감소하는 숫자 reverse 한다.
// 2. 제일 작은 수를 기준으로 둔다.
// 3. arr[0]이 제일 작으면 arr[arr.length - 1] 부터 훑는다.
// 3-1. 더해서 특정 수 보다 크면 arr[arr.length -2]로 내려온다.
// 3-2. 더해서 특정 수 보다 작아지면 arr[1]이 기준이 된다.
// 3-3. 더해서 특정 수가 되면 정답 배열에 조합을 추가한다.
// 4. 작은수의 다음 인덱스가 기준이 되고 3단계부터 다시 진행한다.
// 5. 기준 인덱스와 줄어드는 인덱스가 같으면 종료한다.

function solution1(arr, num) {
  let nums = arr
  let answer = []
  let i = 0
  let j = arr.length - 1

  if (arr[0] > arr[arr.length - 1]) {
    nums = arr.reverse()
  }
  while (i < j) {
    if (nums[i] + nums[j] === num) {
      answer.push([nums[i], nums[j]])
      j--
      i++
    } else if (nums[i] + nums[j] > num) {
      j--
    } else {
      i++
    }
  }
  return answer
}

console.log(solution1([1, 2, 6, 7, 9, 11, 12], 13)) // [ [ 1, 12 ], [ 2, 11 ], [ 6, 7 ] ] 
console.log(solution1([12, 11, 9, 7, 6, 2, 1], 13)) // [ [ 1, 12 ], [ 2, 11 ], [ 6, 7 ] ] 

// ? 두 번째 수도코드
// 1. 주어진 숫자를 2로 나누어 값을 구한다.
// 2. 1에서 구한 값을 배열에서 찾거나, 가장 가까운 두 수를 찾는다.
// 3. 왼쪽부터 오른쪽 인덱스로 커지는 경우,
// 3. 두 수를 더했을 때, 
// 3-1. 숫자가 작으면 오른쪽 숫자가 다음 인덱스로 넘어간다.
// 3-2. 숫자가 크면 왼쪽 숫자가 이전 인덱스로 넘어간다.
// 한쪽 인덱스가 범위를 넘어가면 종료한다.

function solution2(arr, num) {
  let nums = arr
  let answer = []
  let left
  let right

  if (arr[0] > arr[arr.length - 1]) {
    nums = arr.reverse()
  }
  for (let i = 0; i < nums.length; i++) {
    if (num / 2 - nums[i] < 0) {
      right = i
      left = i - 1
      break
    }
  }
  while (left > 0 || right < nums.length) {
    if (nums[left] + nums[right] === num) {
      answer.push([nums[left], nums[right]])
      left--
      right++
    } else if (nums[left] + nums[right] > num) {
      left--
    } else {
      right++
    }
  }
  return answer
}

// 실행코드
console.log(solution2([1, 2, 6, 7, 9, 11, 12], 13))
console.log(solution2([12, 11, 9, 7, 6, 2, 1], 13))

// 출처 : 야후