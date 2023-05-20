// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// My solution...
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums.indexOf(nums[i]), nums.indexOf(nums[j])];
      }
    }
  }
  return [0, 1]; // Return [0,1] if its not a match...
}

// Check if its working...
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8], 15));
