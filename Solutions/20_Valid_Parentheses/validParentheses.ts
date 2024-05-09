// EN: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// SV: Givet en sträng s som endast innehåller tecknen '(', ')', '{', '}', '[' och ']',
// avgör om inmatningssträngen är giltig.

export function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (!stack.length || stack.pop() !== char) {
        return false;
      }
    }
  }

  return !stack.length;
}
