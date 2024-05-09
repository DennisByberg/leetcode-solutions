import { describe, expect, it } from "vitest";
import { romanToInt } from "./romanToInt";

describe(romanToInt, () => {
  it("Should return 3 if the roman number is III", () => {
    expect(romanToInt("III")).toBe(3);
  });

  it("Should return 58 if the roman number is LVIII", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  it("Should return 58 if the roman number is MCMXCIV", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
