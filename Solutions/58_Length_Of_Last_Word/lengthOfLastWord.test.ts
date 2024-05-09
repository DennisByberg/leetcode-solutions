import { describe, expect, it } from "vitest";
import { lengthOfLastWord } from "./lengthOfLastWord";

describe(lengthOfLastWord, () => {
  it("Should return the length of the last word in the provided sentence", () => {
    expect(lengthOfLastWord("Hello beautiful world")).toBe(5);
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });
});
