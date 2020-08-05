export const findUnique = (inputArr, key) => {
  return inputArr.reduce((a, b) => (a.includes(b[key]) ? a : [...a, b[key]]), []);
};

export const getDailyString = (str) => {
  const date = new Date(str);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${days[date.getDay()]}요일`;
};

export const addLeadingZeros = (expectedLength, text) => {
  return '0'.repeat(expectedLength - text.toString().length) + text.toString();
};

export const $ = document.querySelector.bind(document);
