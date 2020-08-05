import './styles.scss';
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

  processDate(data) {
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
  }

  render(data) {
    const date = this.processDate(data);
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
          ${date.lastMonthLastDate.getDate() - date.thisMonthStartDate.getDay() + d}
        </div>`,
      );
    }
    for (let d = 0; d < date.thisMonthLastDate.getDate(); d++) {
      calendarContents.push(html`<div class="calendar-table-cell">
        <div>${d + 1}</div>
      </div>`);
    }
    while (calendarContents.length % 7 != 0) {
      calendarContents.push(
        html`<div class="calendar-table-cell not-this-month">
          ${(calendarContents.length % 7) - 1}
        </div>`,
      );
    }
    console.log(calendarContents);
    console.log(calendarContents.join(''));
    this.$CalendarTable.innerHTML = calendarContents.join('');
  }
}
