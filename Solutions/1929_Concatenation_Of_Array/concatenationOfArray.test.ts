import { describe, expect, it } from "vitest";
import { getConcatenation } from "./concatenationOfArray";

describe(getConcatenation, () => {
  it("should return [0]", () => {
    expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
    expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  });
});
