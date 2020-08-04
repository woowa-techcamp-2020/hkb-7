import './styles.scss';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ActivityTable from 'components/ActivityTable';
import { store } from 'models/store';

export default class ActivitySection {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'moveMonth');

    this.$Form = new Form(this.$target);
    this.$Filter = new Filter(this.$target);
    this.$ActivityTable = new ActivityTable(this.$target);
  }

  init(data) {
    this.$Form.render();
    this.$Filter.render(data);
    this.$ActivityTable.render(data);
  }

  render(data) {
    this.$Filter.render(data);
    this.$ActivityTable.render(data);
  }
}
