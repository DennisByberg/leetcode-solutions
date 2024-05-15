import { describe, expect, it } from "vitest";
import { addDigits } from "./addDigits";

describe(addDigits, () => {
  it("should return a single digit number that is the result of repeatedly adding all digits of the input number", () => {
    expect(addDigits(38)).toEqual(2);
    expect(addDigits(0)).toEqual(0);
  });
});
