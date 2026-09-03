import { describe, expect, it } from "vitest";
import { average } from "../src/average.js";

describe("average", () => {
  it("averages a list of numbers", () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  it("handles a single value", () => {
    expect(average([7])).toBe(7);
  });

  it("handles negatives", () => {
    expect(average([-2, 2])).toBe(0);
  });

  it("returns a fractional mean", () => {
    expect(average([1, 2])).toBe(1.5);
  });

  it("throws on an empty list", () => {
    expect(() => average([])).toThrow(RangeError);
  });
});
