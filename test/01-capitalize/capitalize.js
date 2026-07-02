export const capitalize = function capitalizeTheString(str) {
  const newCapitalizedString = str.charAt(0).toUpperCase() + str.slice(1);
  return newCapitalizedString;
};
