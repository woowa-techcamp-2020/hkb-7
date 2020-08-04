import './styles.scss';
import ActivityTable from 'components/ActivityTable';
import { store } from 'models/store';

export default class ActivitySection {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'activities');
    this.$ActivityTable = new ActivityTable(this.$target);
  }

  init(data) {
    this.$ActivityTable.render(data);
  }

  render(data) {
    this.$ActivityTable.render(data);
  }
}