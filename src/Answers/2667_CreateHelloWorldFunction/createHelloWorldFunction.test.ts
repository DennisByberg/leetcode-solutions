import { describe, expect, it } from "vitest";
import { createHelloWorldFunction } from "./CreateHelloWorldFunction";

describe(createHelloWorldFunction, () => {
  it("Should return 'Hello World' if the function is called", () => {
    expect(createHelloWorldFunction()).toBe("Hello World");
  });
});
