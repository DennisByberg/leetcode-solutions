import { describe, expect, it } from "vitest";
import { absoluteDifferenceArray } from "./absoluteDifferenceArray";

describe(absoluteDifferenceArray, () => {
  it("should return an array with the absolute differences between consecutive elements", () => {
    expect(absoluteDifferenceArray([3, 7, 1, 9, 2])).toEqual([4, 6, 8, 7]);
  });
});
