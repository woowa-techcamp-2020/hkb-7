import './styles.scss';

export default function Filter() {
  return `
    <div class="filter">
      <input type="checkbox" name="income-filter"/>
      <label for="income-filter">수입</label>
      <div class="income-total">2,750,000원</div>
      <input type="checkbox" name="outcome-filter"/>
      <label for="outcome-filter">지출</label>
      <div class="outcome-total">444,790원</div>
    </div>
  `;
}
