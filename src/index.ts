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
