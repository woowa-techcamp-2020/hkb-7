import './styles.scss';
import CalendarTable from 'components/CalendarTable';
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

    this.$CalendarTable = new CalendarTable(this.$CalendarSection);
    this.$target.appendChild(this.$CalendarSection);
  }
  
  render(data) {
    this.$CalendarTable.render(data);
  }
}
