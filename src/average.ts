/**
 * Arithmetic mean of `values`.
 * Throws on an empty list, since the mean of nothing is undefined and
 * returning 0 or NaN would hide the caller's mistake.
 */
export function average(values: readonly number[]): number {
  if (values.length === 0) {
    throw new RangeError("average() requires at least one value");
  }
  return values.reduce((total, n) => total + n, 0) / values.length;
}

export function averageV2(values: readonly number[]):number {
  return average(values) + 16
}