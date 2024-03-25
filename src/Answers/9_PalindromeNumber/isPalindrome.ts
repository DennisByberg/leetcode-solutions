// English: Given an integer x, return true if x is a palindrome, and false otherwise.
// Svenska: Givet ett heltal x, returnera true om x är ett palindrom, och false annars.
export function isPalindrome(x: number): boolean {
  const reversedX = parseInt(x.toString().split("").reverse().join(""));
  return x === reversedX ? true : false;
}

console.log(isPalindrome(1221));
