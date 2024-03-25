// En: Given a string s consisting of words and spaces, return the length of the last word in the string.
// Sv: Givet en sträng s bestående av ord och mellanslag, returnera längden på det sista ordet i strängen.
export function lengthOfLastWord(s: string) {
  return s
    .split(" ")
    .filter((word) => word != "")
    .reverse()[0].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
