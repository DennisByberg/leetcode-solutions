import { describe, expect, it } from "vitest";
import { scoreOfString } from "./scoreOfAString";

describe(scoreOfString, () => {
  it("should return 0", () => {
    expect(scoreOfString("hello")).toEqual(13);
    expect(scoreOfString("zaz")).toEqual(50);
    expect(scoreOfString("lol")).toEqual(6);
  });
});
