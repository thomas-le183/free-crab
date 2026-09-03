/**
 * Middle value of `values` once sorted. An even-length list has no single
 * middle, so the two straddling values are averaged.
 *
 * Throws on an empty list, matching average(): the median of nothing is
 * undefined, and returning 0 would hide the caller's mistake.
 */
export function median(values: readonly number[]): number {
  // Copy before sorting: values is readonly and callers do not expect
  // their array reordered underneath them.
  const sorted = [...values].sort((a, b) => a - b);
  const mid = sorted.length >> 1;
  // An odd length makes lower and upper the same element, so averaging the
  // pair covers both parities. An empty list leaves both undefined.
  const lower = sorted[sorted.length % 2 === 1 ? mid : mid - 1];
  const upper = sorted[mid];
  if (lower === undefined || upper === undefined) {
    throw new RangeError("median() requires at least one value");
  }
  return (lower + upper) / 2;
}
