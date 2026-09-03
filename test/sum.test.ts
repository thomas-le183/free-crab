import { describe, expect, it } from "vitest";
import { sum } from "../src/sum.js";

describe("sum", () => {
  it("adds a list of numbers", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it("sums an empty list to zero", () => {
    expect(sum([])).toBe(0);
  });

  it("handles negative values", () => {
    expect(sum([5, -3, -1])).toBe(1);
  });
});
