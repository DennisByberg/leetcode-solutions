import { describe, expect, it } from "vitest";
import { isPalindrome } from "./isPalindrome";

describe(isPalindrome, () => {
  it("Should return true if x is 121", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it("Should return false if x is 123", () => {
    expect(isPalindrome(123)).toBe(false);
  });

  it("Should return false if we input -121", () => {
    expect(isPalindrome(-121)).toBe(false);
  });
});
