import { describe, expect, it } from "vitest";
import { containsDuplicate } from "./containsDuplicate";

describe(containsDuplicate, () => {
  it("should return true if any value appears at least twice in the array, and false if every element is distinct", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
