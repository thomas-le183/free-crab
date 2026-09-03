import { describe, expect, it } from "vitest";
import { median } from "../src/median.js";

describe("median", () => {
  it("returns the middle value of an odd-length list", () => {
    expect(median([3, 1, 2])).toBe(2);
  });

  it("averages the two middle values of an even-length list", () => {
    expect(median([4, 1, 3, 2])).toBe(2.5);
  });

  it("handles a single value", () => {
    expect(median([7])).toBe(7);
  });

  it("sorts numerically, not lexicographically", () => {
    expect(median([10, 9, 2])).toBe(9);
  });

  it("does not reorder the caller's array", () => {
    const input = [3, 1, 2];
    median(input);
    expect(input).toEqual([3, 1, 2]);
  });

  it("throws on an empty list", () => {
    expect(() => median([])).toThrow(RangeError);
  });
});
