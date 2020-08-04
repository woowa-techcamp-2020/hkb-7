import './styles.scss';
import Form from 'components/Form';
import { store } from 'models/store';

export default class FormSection {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.$Form = new Form(this.$target);
  }

  init(data) {
    this.$Form.render();
  }

  render(data) {
    this.$Form.render();
  }
}
