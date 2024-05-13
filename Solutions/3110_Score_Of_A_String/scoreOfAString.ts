// EN: You are given a string s.
// The score of a string is defined as the sum of the absolute difference between the
// ASCII values of adjacent characters.
// Return the score of s.

// SV: SV: Du ges en sträng s.
// Poängen för en sträng definieras som summan av den
// absoluta skillnaden mellan ASCII-värdena för intilliggande tecken.
// Returnera poängen för s.

export function scoreOfString(s: string): number {
  let total = 0;
  for (let i = 0; i < s.length - 1; i++) {
    total += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }
  return total;
}
