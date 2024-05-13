// EN: Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// SV: Givet en heltalsarray nums, returnera true om något värde förekommer minst två gånger i arrayen,
// och returnera false om varje element är unikt.

export function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}
