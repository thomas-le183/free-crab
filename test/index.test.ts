import { describe, expect, it } from "vitest";
import { add, greet, multiply } from "../src/index.js";

describe("greet", () => {
  it("greets by name", () => {
    expect(greet("world")).toBe("Hello, world!");
  });

  it("trims surrounding whitespace", () => {
    expect(greet("  world  ")).toBe("Hello, world!");
  });

  it("throws on a blank name", () => {
    expect(() => greet("   ")).toThrow(/non-empty/);
  });
});

describe("add", () => {
  it("sums two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("multiply", () => {
  it("multiplies two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it("returns zero when either operand is zero", () => {
    expect(multiply(0, 99)).toBe(0);
  });
});
