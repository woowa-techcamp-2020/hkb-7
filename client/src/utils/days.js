import { addLeadingZeros } from "utils/helper";

export const processDate = (data) => {
  const lastMonthLastDate = new Date(data.year, data.month - 1, 0);
  const thisMonthStartDate = new Date(data.year, data.month - 1, 1);
  const thisMonthLastDate = new Date(data.year, data.month, 0);
  const nextMonthFirstDate = new Date(data.year, data.month, 1);
  return {
    lastMonthLastDate: lastMonthLastDate,
    thisMonthStartDate: thisMonthStartDate,
    thisMonthLastDate: thisMonthLastDate,
    nextMonthFirstDate: nextMonthFirstDate,
  };
};

export const getTomorrow = (date) => {
  let tomorrow = new Date();
  return tomorrow.setDate(new Date().getDate() + 1);
};

export const highlightToday = () => {
  let today = new Date();
  let todayString = `${today.getFullYear()}-${addLeadingZeros(2, today.getMonth() + 1)}-${addLeadingZeros(
    2,
    today.getDate(),
  )}`;
  let todayCell = document.querySelector(`.date-${todayString}`);
  if (todayCell) {
    todayCell.classList.add('today');
    todayCell.innerHTML += `<div class = "today todayLabel">today</div>`;
  }
};
