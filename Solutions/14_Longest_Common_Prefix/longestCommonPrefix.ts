// EN: Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// SV: Skriv en funktion för att hitta den längsta gemensamma prefixsträngen bland en array av strängar.
// Om det inte finns något gemensamt prefix, returnera en tom sträng "".

export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  strs.sort();

  const firstWord = strs[0];
  const lastWord = strs[strs.length - 1];

  let i = 0;

  while (i < firstWord.length && i < lastWord.length && firstWord[i] === lastWord[i]) {
    i++;
  }

  return firstWord.substring(0, i);
}
