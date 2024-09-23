export default function isPalindrome(s: string): boolean {
  function isAlphaNumeric(char: string): boolean {
    return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
  }

  function cleanString(s: string): string {
    return s.toLowerCase().split('').filter(isAlphaNumeric).join('');
  }

  const cleanedString = cleanString(s);
  const reversedString = cleanString(s.split('').reverse().join(''));

  return cleanedString === reversedString ? true : false;
}
