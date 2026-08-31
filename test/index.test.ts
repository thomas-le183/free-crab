import { describe, expect, it } from "vitest";
import { add, greet } from "../src/index.js";

describe("greet", () => {
  it("greets by name", () => {
    expect(greet("world")).toBe("Hello, world!");
  });
});

describe("add", () => {
  it("sums two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
