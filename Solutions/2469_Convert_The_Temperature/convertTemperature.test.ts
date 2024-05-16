import { describe, expect, it } from "vitest";
import { convertTemperature } from "./convertTemperature";

describe(convertTemperature, () => {
  it("should correctly convert Celsius to Kelvin and Fahrenheit", () => {
    expect(convertTemperature(36.5)).toEqual([309.65, 97.7]);
    expect(convertTemperature(122.11)).toEqual([395.26, 251.798]);
  });
});
