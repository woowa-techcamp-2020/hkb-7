import './styles.scss';
import { element } from '../../utils/element';

export default class Filter {
  constructor($target) {
    this.$target = $target;

    this.$Filter = element('div', {
      className: 'filter',
      innerHTML: `
        <input type="checkbox" name="income-filter"/>
        <label for="income-filter">수입</label>
        <div class="income-total">2,750,000원</div>
        <input type="checkbox" name="outcome-filter"/>
        <label for="outcome-filter">지출</label>
        <div class="outcome-total">444,790원</div>
      `,
    });

    this.render();
  }

  render() {
    this.$target.appendChild(this.$Filter);
  }
}
