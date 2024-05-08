// EN: There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.
// The company requires each employee to work for at least target hours.
// You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.
// Return the integer denoting the number of employees who worked at least target hours.

// SV: Det finns n anställda i ett företag, numrerade från 0 till n - 1. Varje anställd i har arbetat i hours[i] timmar i företaget.
// Företaget kräver att varje anställd arbetar åtminstone target timmar.
// Du får en 0-indexerad array av icke-negativa heltal hours med längden n och ett icke-negativt heltal target.
// Returnera det heltal som anger antalet anställda som har arbetat åtminstone target timmar.

export function numberOfEmployeesWhoMetTarget(hours: number[], target: number) {
  return hours.filter((hour) => hour >= target).length;
}
