import { describe, expect, it } from "vitest";
import { sum } from "./AddTwoIntegers";

describe(sum, () => {
  it("should return 17 if num1 = 12 and num2 = 5", () => {
    expect(sum(12, 5)).toEqual(17);
  });

  it("should return -6 if num1 = -10 and num2 = 4", () => {
    expect(sum(-10, 4)).toEqual(-6);
  });
});
