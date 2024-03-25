import { describe, expect, it } from "vitest";
import { twoSum } from "./TwoSum";

describe(twoSum, () => {
  it("Should return an array of 0 and 1 if i input 1,2,3 as numbers and 6 as target (Failed to find)", () => {
    expect(twoSum([1, 2, 3], 6)).toEqual([0, 1]);
  });

  it("Should return an array of 0 and 2 if we input 3,2,3 as numbers and 6 as target(Success to find)", () => {
    expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
  });
});
