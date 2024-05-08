import { describe, expect, it } from "vitest";
import { plusOne } from "./PlusOne";

describe(plusOne, () => {
  it("Should return an array of numbers [1,2,4] if given [1,2,3]", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it("Should return an array of numbers [1,0] if given [9]", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  it("Should return an array of numbers [4,3,2,2] if given [4,3,2,1]", () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });
});
