import { describe, expect, it } from "vitest";
import { add, clamp, greet, multiply } from "../src/index.js";

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

describe("clamp", () => {
  it("returns the value when already inside the range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("clamps to the lower bound", () => {
    expect(clamp(-3, 0, 10)).toBe(0);
  });

  it("clamps to the upper bound", () => {
    expect(clamp(42, 0, 10)).toBe(10);
  });

  it("treats the bounds as inclusive", () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });

  it("throws when the range is inverted", () => {
    expect(() => clamp(5, 10, 0)).toThrow(RangeError);
  });
});
