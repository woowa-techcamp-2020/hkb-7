import './styles.scss';
import { element } from 'utils/element';
import { bindEvent } from 'utils/bindEvent';
import { store } from 'models/store';

export default class MonthNavigator {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'currentMonth');

    this.$MonthNavigator = element('div', {
      className: 'month-navigator',
    });

    this.$target.appendChild(this.$MonthNavigator);
  }

  render(data) {
    this.$MonthNavigator.innerHTML = `
      <button class="prev-month-button">⬅️</button>
      <h1 class="month-title">${data.currentMonth}월</h1>
      <button class="next-month-button">➡️</button>
    `;

    bindEvent('.prev-month-button', 'click', () => {
      data.currentMonth--;
      this.store.notify(data, 'currentMonth');
    });

    bindEvent('.next-month-button', 'click', () => {
      data.currentMonth++;
      this.store.notify(data, 'currentMonth');
    });
  }
}
