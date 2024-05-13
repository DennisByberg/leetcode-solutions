// EN: Given an integer n, return a counter function.
// This counter function initially returns n and then returns 1 more than the previous
// value every subsequent time it is called (n, n + 1, n + 2, etc).

// SV: Givet ett heltal n, returnera en räknar funktion.
// Denna räknar funktion returnerar initialt n och sedan returnerar den 1 mer än det föregående
// värdet varje efterföljande gång den anropas (n, n + 1, n + 2, etc).

export function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}
