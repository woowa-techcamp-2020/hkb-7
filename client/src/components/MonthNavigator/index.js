import './styles.scss';
import { element } from 'utils/element';

export default class MonthNavigator {
  constructor($target) {
    this.$target = $target;

    this.$MonthNavigator = element('div', {
      className: 'month-navigator',
      innerHTML: `
        <button class="prev-month-button">⬅️</button>
        <h1 class="month-title">6월</h1>
        <button class="next-month-button">➡️</button>
      `,
    });

    this.render();
  }

  render() {
    this.$target.appendChild(this.$MonthNavigator);
  }
}
