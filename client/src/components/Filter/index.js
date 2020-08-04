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
    <div class="income-outcome-filter">

    <input class="income-outcome-filter-input" type="checkbox" name="income-outcome-filter-input" id="income-filter-input" checked/>
    <label class="income-outcome-filter-label left-label" for="income-filter-input">
      <div class="income-outcome-filter-label-text">✓ 수입 ${data.total.income}원</div>
    </label>
    
    <input class="income-outcome-filter-input" type="checkbox" name="income-outcome-filter-input" id="outcome-filter-input" checked/>
    <label class="income-outcome-filter-label right-label" for="outcome-filter-input">
      <div class="income-outcome-filter-label-text">✓ 지출 ${data.total.outcome}원</div>
    </label>
    
    </div>
    `;
  }
}
