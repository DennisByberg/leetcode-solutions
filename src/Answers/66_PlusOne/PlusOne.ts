// En: You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.

// Sv: Du har fått en stor heltalsrepresentation som en array av heltal, där varje digits[i] är den i:te siffran i heltalet.
// Siffrorna är ordnade från mest signifikanta till minst signifikanta i vänster-till-höger ordning.
// Det stora heltalet innehåller inte några ledande 0:or.

export function plusOne(digits: number[]) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}
