import { describe, expect, it } from "vitest";
import { numberOfEmployeesWhoMetTarget } from "./NumberOfEmployeesWhoMetTheTarget";

describe(numberOfEmployeesWhoMetTarget, () => {
  it("Should return 3 if i input the working hours: [0,1,2,3,4] and the target 2", () => {
    expect(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)).toEqual(3);
  });

  it("Should return 0 if i input the working hours: [5,1,4,2,2] and the target 6", () => {
    expect(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6)).toEqual(0);
  });
});
