import './styles.scss';
import { element } from '../../utils/element';

export default class Filter {
  constructor($target) {
    this.$target = $target;

    this.$Filter = element('div', {
      className: 'filter',
    });

    this.$target.appendChild(this.$Filter);
  }

  render(data) {
    this.$Filter.innerHTML = `
      <input type="checkbox" name="income-filter"/>
      <label for="income-filter">수입</label>
      <div class="income-total">${data.total.income}원</div>
      <input type="checkbox" name="outcome-filter"/>
      <label for="outcome-filter">지출</label>
      <div class="outcome-total">${data.total.outcome}원</div>
    `;
  }
}
