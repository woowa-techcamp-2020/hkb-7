import './styles.scss';
import { addLeadingZeros } from 'utils/helper';
import { highlightToday, processDate } from 'utils/days';
import { element } from 'utils/element';
import { html } from 'utils/html';

export default class CalendarTable {
  constructor($target) {
    this.$target = $target;

    this.$CalendarTable = element('div', {
      className: 'calendar-table',
    });

    this.$target.appendChild(this.$CalendarTable);
  }

  render(data) {
    const date = processDate(data);
    let calendarContents = [];
    let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    for (let d = 0; d < 7; d++) {
      calendarContents.push(
        html`<div class="calendar-table-day-bar">
          <div class="calendar-table-day">
            ${days[d]}
          </div>
        </div>`,
      );
    }

    for (let d = 0; d < date.thisMonthStartDate.getDay(); d++) {
      calendarContents.push(
        html`<div class="calendar-table-cell not-this-month">
          ${date.lastMonthLastDate.getDate() - date.thisMonthStartDate.getDay() + d + 1}
        </div>`,
      );
    }

    for (let d = 0; d < date.thisMonthLastDate.getDate(); d++) {
      let dayString = `${data.year}-${addLeadingZeros(2, data.month)}-${addLeadingZeros(2, d + 1)}`;
      calendarContents.push(html`<div class="calendar-table-cell">
        <div class="date-${dayString}">
          ${d + 1}
        </div>
        <div class="calendar-table-cell-activity">
          ${data.activities[dayString]
            ? `
          <div class = "positive">
            ${data.activities[dayString].dailyTotal.income.toLocaleString('ko-KR')}원
          </div>
          <div class = "negative">
            ${data.activities[dayString].dailyTotal.outcome.toLocaleString('ko-KR')}원
          </div>`
            : ''}
        </div>
      </div>`);
    }

    let nextMonthDaysToRender = 7 - (calendarContents.length % 7);
    if (nextMonthDaysToRender < 7) {
      for (let d = 0; d < nextMonthDaysToRender; d++) {
        calendarContents.push(
          html`<div class="calendar-table-cell not-this-month">
            ${d + 1}
          </div>`,
        );
      }
    }
    this.$CalendarTable.innerHTML = calendarContents.join('');
    highlightToday();
  }
}
