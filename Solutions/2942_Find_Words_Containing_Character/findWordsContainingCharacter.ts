// EN: You are given a 0-indexed array of strings 'words' and a character 'x'.
// Return an array of indices representing the words that contain the character 'x'.
// Note that the returned array may be in any order.

// SV: Du får en 0-indexerad array av strängar 'words' och en karaktär 'x'.
// Returnera en array av index som representerar de ord som innehåller karaktären 'x'.
// Observera att den returnerade arrayen kan vara i vilken ordning som helst.

export function findWordsContaining(words: string[], x: string): number[] {
  const indexArray: number[] = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      indexArray.push(i);
    }
  }

  return indexArray.sort((a, b) => a - b);
}
