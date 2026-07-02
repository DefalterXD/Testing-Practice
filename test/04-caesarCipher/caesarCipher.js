export const caesarCipher = function caesarCipherToEncrypt(str, shift) {
  const asciiArr = convertToAsciiArr(str);
  const shiftedAsciiCodes = asciiArr.map((code) =>
    shiftingIndividualLetter(code, shift),
  );
  const encryptedStr = String.fromCharCode(...shiftedAsciiCodes);
  return encryptedStr;
};

const convertToAsciiArr = function convertToAsciiArrFromString(str) {
  return str.split("").map((letter, index) => str.charCodeAt(index));
};

const shiftingIndividualLetter = function shiftingIndividualLetterFromArr(
  code,
  shift,
) {
  for (let i = 0; i < shift; ++i) {
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) code += 1;

    if (code > 90 && code < 97) {
      code = 65;
    }
    if (code > 122) {
      code = 97;
    }
  }

  return code;
};
