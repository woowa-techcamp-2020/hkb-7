export const findUnique = (inputArr, key) => {
  return inputArr.reduce((a, b) => (a.includes(b[key]) ? a : [...a, b[key]]), []);
};

export const parseDate = (str) => {
  return str.slice(0, 10);
};

export const addLeadingZeros = (expectedLength, text) => {
  return '0'.repeat(expectedLength - text.toString().length) + text.toString();
}