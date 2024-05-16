import { describe, expect, it } from "vitest";
import { findWordsContaining } from "./findWordsContaining";

describe(findWordsContaining, () => {
  it("should return [0]", () => {
    expect(findWordsContaining(["leet", "code"], "e")).toEqual([0, 1]);
    expect(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a")).toEqual([0, 2]);
  });
});
