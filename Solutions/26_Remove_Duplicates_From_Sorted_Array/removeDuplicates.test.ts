import { describe, expect, it } from "vitest";
import { removeDuplicates } from "./removeDuplicates";

describe(removeDuplicates, () => {
  it("should return 0", () => {
    expect(removeDuplicates([1, 2, 2])).toEqual(2);
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
  });
});
