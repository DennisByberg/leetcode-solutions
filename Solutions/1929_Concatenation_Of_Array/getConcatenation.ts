// EN: Given an integer array nums of length n,
// you want to create an array ans of length 2n where
// ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// SV: Givet en heltalsarray nums av längden n,
// vill du skapa en array ans av längden 2n där
// ans[i] == nums[i] och ans[i + n] == nums[i] för 0 <= i < n (0-indexerad).
// Specifikt är ans en sammanfogning av två nums-arrayer.
//  Returnera arrayen ans.

export function getConcatenation(nums: number[]): number[] {
  return nums.concat(nums);
}
