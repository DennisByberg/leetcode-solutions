// En: Given a roman numeral, convert it to an integer.
// Sv: Givet ett romerskt tal, konvertera det till ett heltal.

enum RomanNumbersEnum {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000,
}

export function romanToInt(s: string): number {
  let total = 0;
  let prevValue = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue =
      RomanNumbersEnum[s[i] as keyof typeof RomanNumbersEnum];
    if (currentValue > prevValue) {
      total -= 2 * prevValue;
    }
    total += currentValue;
    prevValue = currentValue;
  }

  return total;
}
