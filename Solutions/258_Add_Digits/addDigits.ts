// EN: Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// SV: Givet ett heltal num, upprepa att lägga till alla dess siffror tills resultatet bara har en siffra, och returnera den.

export function addDigits(num: number): number {
  while (num > 9) {
    let newNum = 0;

    for (let i = 0; i < num.toString().length; i++) {
      newNum += parseInt(num.toString()[i]);
    }

    num = newNum;
  }

  return num;
}
