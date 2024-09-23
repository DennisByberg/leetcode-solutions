import { describe, expect, it } from 'vitest';
import isPalindrome from './isPalindrome';

describe(isPalindrome, () => {
  it('Should return true if it is a palindrome, or false otherwise.', () => {
    expect(isPalindrome('Anna')).toBe(true);
    expect(isPalindrome('Hello there')).toBe(false);
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('"0P"')).toBe(false);
  });
});
