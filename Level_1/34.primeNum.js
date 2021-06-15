// 문제요약
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 수 리턴

// 입출력 예시 
// [1,2,3,4] => 1
// [1,2,7,6,4] => 4

// ? 수도코드
// for문을 3개로 작성합니다.
// 3개의 숫자를 더한 후, 소수인지 판별합니다.
// 소수면 count를 올립니다.

// 통과한 코드 (21.06.15)
function checkPrime(num) {
  let count = 0;
  for (let i = 2; i < num; i ++) {
    if (num % i === 0) {
      return 0
    }
  }
  return 1
}

function solution(nums) {
  var answer = 0;
  for (let first = 0; first < nums.length -2; first ++) {
    for (let second = first+1; second < nums.length-1; second ++) {
      for (let third = second+1; third < nums.length; third ++) {
        const isPrime = checkPrime(nums[first] + nums[second] + nums[third])
        answer = answer + isPrime
      }
    }
  }
  return answer;
}


// 실행코드
console.log(solution([1,2,7,6,4]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12977