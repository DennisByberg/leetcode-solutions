// EN: Given an integer array nums,
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// SV: Givet en heltalsarray nums,
// flytta alla 0:or till slutet av den samtidigt som den relativa ordningen för de icke-noll elementen bibehålls.

export function moveZeroes(nums: number[]): void {
  const allZeroesInArray = nums.filter((num) => num === 0);
  const allNonZeroesInArray = nums.filter((num) => num !== 0);

  nums.length = 0;

  Array.prototype.push.apply(nums, allNonZeroesInArray.concat(allZeroesInArray));
}
