import './styles.scss';
import { element } from 'utils/element';
import { store } from 'models/store';

export default class StatisticSection {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'moveMonth');

    this.$StatisticSection = element('div', {
      className: 'statistic-section',
    });

    this.$target.appendChild(this.$StatisticSection);
  }

  render(data) {}
}
