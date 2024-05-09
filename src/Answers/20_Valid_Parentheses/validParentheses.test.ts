import { describe, expect, it } from "vitest";
import { isValid } from "./validParentheses";

describe(isValid, () => {
  it("Should return true", () => {
    expect(isValid("()")).toBe(true);
  });

  it("Should return true if input is '()[]{}'", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  it("Should return false if input is '(]'", () => {
    expect(isValid("(]")).toBe(false);
  });

  it("Should return false if input is '{[]}'", () => {
    expect(isValid("{[]}")).toBe(true);
  });
});
