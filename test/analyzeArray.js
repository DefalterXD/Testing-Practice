export const analyzeArray = function analyzeArrayToConvertIntoObj(arr) {
  const average = arr.reduce((prev, next) => (prev += next), 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
};
