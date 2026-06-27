export const reverseString = function reverseStringFromOriginal(str) {
  const reversedString = str.split("").reverse().join("");
  return reversedString;
};
