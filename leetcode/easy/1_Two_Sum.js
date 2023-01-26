// 문제요약
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// 입출력 예시 
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

// ? 수도코드
// 1. target 보다 작은 수면 임시로 저장한다.
// 2. target 보다 큰 수는 지나간다.
// 3. 임시로 저장한 수와 합쳐서 target가 되면 두 수의 index를 리턴한다.

// 통과한 코드 (23.00.00)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
  let tempNum
  let tempIndex
  for (let i = 0; i < nums.length; i++) {
    tempNum = nums[i]
    tempIndex = i

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (tempNum + nums[j] === target) {
          return [tempIndex, j]
        }
      }
    }
  }
};

// 실행코드
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([-3,4,3,90], 0));

// 링크 : https://leetcode.com/problems/two-sum/