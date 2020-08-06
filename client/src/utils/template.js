export const formYears = (year) => {
  return `
    <option name="year" value="${year}">${year}년</option>
  `;
};

export const formMonths = (month) => {
  return `
    <option name="month" value="${month}">${month}월</option>
  `;
};

export const formDays = (day) => {
  return `
    <div class="month-grid-date-item">
      <div class="month-grid-date-label-text">${day}</div>
    </div>
  `;
};

export const formDates = (date) => {
  return `
    <div class="month-grid-date-item">
      <input class="month-grid-date-input" type="radio" value="${date}" name="date" id="month-grid-date-input-${date}" required/>
      <label class="month-grid-date-label" for="month-grid-date-input-${date}">
        <div class="month-grid-date-label-text">${date}</div>
      </label>
    </div>
  `;
};

export const formPaymentMethods = (id, name) => {
  return `
    <option name="payment-method" value="${id}">${name}</option>
  `;
};

export const formCategories = (id, name, is_income) => {
  return `
    <option class="disabled ${
      is_income ? 'income-category' : 'outcome-category'
    }" name="category" value="${id}">${name}</option>
  `;
};
