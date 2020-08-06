import './styles.scss';
import { element } from 'utils/element';
import MonthNavigator from 'components/MonthNavigator';
import { store } from 'models/store';
import Filter from 'components/Filter';

export default class MonthBar {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'moveMonth');
    this.store.subscribe((data) => this.render(data), 'clickFilter');

    this.$MonthBar = element('div', {
      className: 'month-bar',
    });

    this.$MonthNavigator = new MonthNavigator(this.$MonthBar);
    this.$Filter = new Filter(this.$MonthBar);

    this.$target.appendChild(this.$MonthBar);
  }

  render(data) {
    this.$MonthNavigator.render(data);
    this.$Filter.render(data);
  }
}
