import { describe, expect, it } from "vitest";
import { argumentsLength } from "./ReturnLengthOfArgumentsPassed";

describe(argumentsLength, () => {
  it("Should return 1 if i input the a 5 in the array", () => {
    expect(argumentsLength([5])).toEqual(1);
  });

  it("Should return 1 if i input null in the array", () => {
    expect(argumentsLength([null])).toEqual(1);
  });

  it("Should return 1 if i input an empty object in the array", () => {
    expect(argumentsLength([{}])).toEqual(1);
  });

  it("Should return 3 if i input an empty object, null and the string '3' in the array", () => {
    expect(argumentsLength([{}, null, "3"])).toEqual(3);
  });
});
