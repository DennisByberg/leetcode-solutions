import { describe, expect, it } from "vitest";
import { createCounter } from "./createCounter";

describe("createCounter", () => {
  it("should return a function that returns increasing numbers", () => {
    const counter = createCounter(5);
    expect(counter()).toBe(5);
    expect(counter()).toBe(6);
    expect(counter()).toBe(7);
    expect(counter()).toBe(8);
  });

  it("should return a function that returns increasing numbers", () => {
    const counter = createCounter(-1);
    expect(counter()).toBe(-1);
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
  });
});
