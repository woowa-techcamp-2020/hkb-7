import './styles.scss';
import ActivityTable from 'components/ActivityTable';
import { element } from 'utils/element';
import { store } from 'models/store';

export default class ActivitySection {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'moveMonth');

    this.$ActivitySection = element('div', {
      className: 'activity-section',
    });

    this.$ActivityTable = new ActivityTable(this.$ActivitySection);
    this.$target.appendChild(this.$ActivitySection);
  }

  render(data) {
    this.$ActivityTable.render(data);
  }
}
