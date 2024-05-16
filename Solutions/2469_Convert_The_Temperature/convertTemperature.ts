// EN: You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.
// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].
// Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// SV: Du får ett icke-negativt flyttal avrundat till två decimaler celsius, som anger temperaturen i Celsius.
// Du bör omvandla Celsius till Kelvin och Fahrenheit och returnera det som en array ans = [kelvin, fahrenheit].
// Returnera arrayen ans. Svar inom 10-5 från det faktiska svaret kommer att accepteras.

export function convertTemperature(celsius: number): number[] {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32.0;

  return [kelvin, fahrenheit];
}
