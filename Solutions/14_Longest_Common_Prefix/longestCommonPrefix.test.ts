import { describe, expect, it } from "vitest";
import { longestCommonPrefix } from "./longestCommonPrefix";

describe(longestCommonPrefix, () => {
  it("Should return", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  it("Should return an empty string if input dog, racecar and car", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  it("Should return 'a' string if input 'a'", () => {
    expect(longestCommonPrefix(["a"])).toBe("a");
  });

  it("Should return 'aa' if input is ['aaa', 'aa', 'aaa']", () => {
    expect(longestCommonPrefix(["aaa", "aa", "aaa"])).toBe("aa");
  });
});
