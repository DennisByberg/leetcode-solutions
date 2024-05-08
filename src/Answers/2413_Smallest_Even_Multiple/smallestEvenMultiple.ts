// EN: Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
// SV: Givet ett positivt heltal n, returnera det minsta positiva heltalet som är en multipel av både 2 och n.

export function smallestEvenMultiple(n: number): number {
  return n % 2 === 0 ? n : 2 * n;
}
