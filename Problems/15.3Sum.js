/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const twoSum = (left, target, nums) => {
  let right = nums.length - 1;
  let result = [];
  while (left < right) {
    let leftVal = nums[left];
    let rightVal = nums[right];
    if (leftVal + rightVal > target) {
      right--;
    } else if (leftVal + rightVal < target) {
      left++;
    } else {
      result.push([target * -1, leftVal, rightVal]);
      while (left < right && nums[left] === nums[left + 1]) left++;
      while (left < right && nums[right] === nums[right - 1]) right--;
      left++;
      right--;
    }
  }
  return result;
};

const threeSum = (nums) => {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let target = nums[i] * -1;
    let subResult = twoSum(i + 1, target, nums);
    result.push(...subResult);
  }
  return result;
};

/*
Complexity:

Time complexity : O(n^2).
Space complexity : O(1).
*/

/*
Problem
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

const threeSum__ = (nums) => {
  //[-1,0,1,2,-1,-4]
  let result = [];
  let left = 0;
  let right = 0;
  nums.sort((a, b) => a - b); //Sort the array if unsorted
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; //if the same as previous then continue
    left = i + 1; //Left increases to the right
    right = nums.length - 1; //Right Always decreases the length to the left
    while (left < right) {
      //while the left index is always less the the right pointer ?
      if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; //if the next number is still the same Continue
        while (left < right && nums[right] === nums[right - 1]) right--; //if the same as previous decrease the right side
        left++; //In two pointers continue left untill it meets right
        right--; //In two pointers decrease right until it crosses the left where  while(left<right) is not valid
      }
    }
  }
  return result;
};

const threeSum_ = (nums) => {
  //[-1,0,1,2,-1,-4]
  let len = nums.length;
  let result = [];
  let left = 0;
  let right = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return result;
};
