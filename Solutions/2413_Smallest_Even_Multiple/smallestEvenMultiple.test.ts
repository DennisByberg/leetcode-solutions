import { describe, expect, it } from "vitest";
import { smallestEvenMultiple } from "./smallestEvenMultiple";

describe(smallestEvenMultiple, () => {
  it("Should return 5 if i input 10", () => {
    expect(smallestEvenMultiple(5)).toEqual(10);
  });

  it("Should return 6 if i input 6", () => {
    expect(smallestEvenMultiple(6)).toEqual(6);
  });
});
