/**
 * Adds every number in `values`. An empty list sums to 0.
 */
export function sum(values: readonly number[]): number {
  return values.reduce((total, n) => total + n, 0);
}
