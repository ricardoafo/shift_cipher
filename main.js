class ShiftCipher {

  constructor(positionsToShift) {
    this._shift = positionsToShift;
    this._alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  }

  get shift() {
    return this._shift;
  }

  get alphabetArray() {
    return this._alphabetArray;
  }

  encrypt(word) {
    word = word.toLowerCase();
    let encryptedWord = "";

    for (let letter of word) {
      let indexOfLetter = this._alphabetArray.indexOf(letter);
      if (indexOfLetter === -1) {
        encryptedWord += letter;
        continue;
      }

      let indexOfLetterAfterShift = indexOfLetter + this._shift;
      if (indexOfLetterAfterShift >= 0 && indexOfLetterAfterShift <= 25) {
        encryptedWord += this._alphabetArray[indexOfLetterAfterShift];
      } else {
        let wrappedIndex = indexOfLetterAfterShift - this._alphabetArray.length;
        encryptedWord += this._alphabetArray[wrappedIndex];
      }
    }

    return encryptedWord.toUpperCase();
  }

  decrypt(word) {
    word = word.toLowerCase();
    let decryptedWord = "";

    for (let letter of word) {
      let indexOfLetter = this._alphabetArray.indexOf(letter);
      if (indexOfLetter === -1) {
        decryptedWord += letter;
        continue;
      }

      let indexOfLetterAfterShift = indexOfLetter - this._shift;
      if (indexOfLetterAfterShift >= 0 && indexOfLetterAfterShift <= 25) {
        decryptedWord += this._alphabetArray[indexOfLetterAfterShift];
      } else {
        let wrappedIndex = this._alphabetArray.length + indexOfLetterAfterShift;
        decryptedWord += this._alphabetArray[wrappedIndex];
      }
    }

    return decryptedWord;
  }
}

// Test cases
const cipher = new ShiftCipher(2);
console.log(cipher.encrypt("Zorro")); // Output: 'BQTTP'
console.log(cipher.encrypt("La tablabadaw")); // Output: 'NCVDCNDCECY'
console.log(cipher.encrypt("I <3 to code!")); // Output: 'K <3 VQ EQFG!'
console.log(cipher.decrypt("K <3 OA RWRRA")); // Output: 'i <3 my puppy'
