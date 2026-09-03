export function greet(name: string): string {
  const trimmed = name.trim();
  if (trimmed === "") {
    throw new Error("greet() requires a non-empty name");
  }
  return `Hello, ${trimmed}!`;
}

export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Constrains `value` to the inclusive range [min, max].
 * Throws if the range is inverted, since that is always a caller bug.
 */
export function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(min) || Number.isNaN(max)) {
    throw new RangeError("clamp() bounds must not be NaN");
  }
  if (min > max) {
    throw new RangeError(`min (${min}) must not exceed max (${max})`);
  }
  return Math.min(Math.max(value, min), max);
}
