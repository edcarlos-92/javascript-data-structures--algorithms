const twoSum = (nums, target) => {
  let hash = {}; //initalize an empty hash table
  //Create a hash table solve this probem
  for (i = 0; i <= nums.length; i++) {
    let val = nums[i];
    hash[val] = i;
  }
  for (i = 0; i <= nums.length; i++) {
    let potentialValue = target - nums[i];
    if (hash[potentialValue] && hash[potentialValue] !== i) {
      return [i, hash[potentialValue]];
    }
  }
};
let target = 9;
let data = [8, 3, 4, 6, 5, 1, 7];
console.log(twoSum(data, target));
//-> Best Time Complexity O(n) because i had to alterate at least one through the array
//-> Best Space Complexity O(n) because i needed to create and store a table to check from
