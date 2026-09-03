/**
 * Adds every number in `values`. An empty list sums to 0.
 *
 * Uses a plain loop rather than reduce: reduce allocates a callback and
 * invokes it once per element, and sum() sits under average() and median()
 * where that overhead is paid on every call.
 */
export function sum(values: readonly number[]): number {
  let total = 0;
  for (const n of values) {
    total += n;
  }
  return total;
}
