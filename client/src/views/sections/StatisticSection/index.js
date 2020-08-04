import './styles.scss';
import Filter from 'components/Filter';
import { store } from 'models/store';

export default class StatisticSection {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'moveMonth');

    this.$Filter = new Filter(this.$target);
  }

  init(data) {
    this.$Filter.render(data);
  }

  render(data) {
    this.$Filter.render(data);
  }
}
