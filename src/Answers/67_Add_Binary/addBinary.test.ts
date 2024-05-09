import { describe, expect, it } from "vitest";
import { addBinary } from "./addBinary";

describe(addBinary, () => {
  it("Should return '100' in binary if i input '11' and '1'", () => {
    expect(addBinary("11", "1")).toBe("100");
  });

  it("Should return '10101' in binary if i input '1010' and 1011", () => {
    expect(addBinary("1010", "1011")).toBe("10101");
  });
});
