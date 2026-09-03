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

  it("throws on NaN", () => {
    expect(() => average([1, NaN, 3])).toThrow(RangeError);
  });

  it("throws on an infinity", () => {
    expect(() => average([1, Infinity])).toThrow(RangeError);
    expect(() => average([1, -Infinity])).toThrow(RangeError);
  });

  it("names the offending index", () => {
    expect(() => average([1, 2, NaN])).toThrow(/index 2/);
  });
});
