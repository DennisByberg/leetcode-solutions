// EN: You are given an array of integers.
// Write a function absoluteDifferenceArray that takes this array as input and returns a new array.
// In the new array, each element should be the absolute
// difference between the corresponding element in the input array and the next element.
// If there is no next element for the last element in the input array, ignore it.
// For example, given the input array [3, 7, 1, 9, 2], the function should return [4, 6, 8, 7].

// SV: Du ges en array av heltal.
// Skriv en funktion absoluteDifferenceArray som tar denna array som input och returnerar en ny array.
// I den nya arrayen ska varje element vara den absoluta skillnaden mellan
// motsvarande element i input-arrayen och nästa element.
// Om det inte finns något nästa element för det sista elementet i input-arrayen, ignorera det.
// Till exempel, givet input-arrayen [3, 7, 1, 9, 2], ska funktionen returnera [4, 6, 8, 7].

export function absoluteDifferenceArray(nums: number[]): number[] {
  let newArray: number[] = [];
  for (let i = 0; i < nums.length - 1; i++) {
    const numberToPushIn = nums[i] - nums[i + 1];
    newArray.push(Math.abs(numberToPushIn));
  }
  return newArray;
}
