// En: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Sv: Givet en array av heltal nums och ett heltal target, returnera index för de två talen så att de summerar till target.
export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [0, 1]; // Return [0,1] if its not a match...
}
