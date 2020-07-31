import './styles.scss';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ActivityTable from 'components/ActivityTable';

export default class ActivitySection {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.$Form = new Form(this.$target);
    this.$Filter = new Filter(this.$target);
    this.$ActivityTable = new ActivityTable(this.$target);
  }
}
