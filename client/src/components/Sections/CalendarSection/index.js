import './styles.scss';
import { element } from 'utils/element';
import { store } from 'models/store';

export default class CalendarSection {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'moveMonth');

    this.$CalendarSection = element('div', {
      className: 'calendar-section',
    });

    this.$target.appendChild(this.$CalendarSection);
  }

  render(data) {}
}
