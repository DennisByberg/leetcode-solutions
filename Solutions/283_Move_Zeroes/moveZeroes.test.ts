import { describe, expect, it } from "vitest";
import { moveZeroes } from "./moveZeroes";

describe(moveZeroes, () => {
  it("should move all 0's to the end of the array while maintaining the relative order of the non-zero elements", () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });

  it("should move all 0's to the end of the array while maintaining the relative order of the non-zero elements", () => {
    const nums = [0];
    moveZeroes(nums);
    expect(nums).toEqual([0]);
  });
});
