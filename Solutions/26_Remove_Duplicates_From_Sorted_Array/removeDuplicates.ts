// EN: Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// SV: Givet en heltalsarray nums sorterad i icke-avtagande ordning,
// ta bort dubbletter på plats så att varje unikt element endast visas en gång.
// Den relativa ordningen av elementen ska förbli densamma.
// Returnera sedan antalet unika element i nums.

export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}
