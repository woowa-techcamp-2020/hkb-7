import './styles.scss';
import { element } from 'utils/element';

export default class ActivityTable {
  constructor($target) {
    this.$target = $target;

    this.$ActivityTable = element('div', {
      className: 'activity-table',
    });

    this.$target.appendChild(this.$ActivityTable);
  }

  render(data) {
    this.$ActivityTable.innerHTML = `
      <div class="date-summary">
        <div class="date-container">
          <div>6월 16일</div>
          <div>화</div>
        </div>
        <div class="summary-container">
          <div>
            <div>+0원</div>
            <div>-26,000원</div>
          </div>
        </div>
      </div>
      <div class="activity-row">
        <div class="activity-category-tag">쇼핑/뷰티</div>
        <div class="activity-content">미용실</div>
        <div class="activity-payment-method">현대카드</div>
        <div class="activity-price outcome">-20,000원</div>
      </div>
      <div class="activity-row">
        <div class="activity-category-tag">식비</div>
        <div class="activity-content">맥도날드</div>
        <div class="activity-payment-method">카카오체크카드</div>
        <div class="activity-price outcome">-6,000원</div>
      </div>
      <div class="date-summary">
        <div class="date-container">
          <div>6월 15일</div>
          <div>월</div>
        </div>
        <div class="summary-container">
          <div>
            <div>+2,750,000원</div>
            <div>-17,200원</div>
          </div>
        </div>
      </div>
      <div class="activity-row">
        <div class="activity-category-tag">월급</div>
        <div class="activity-content">월급</div>
        <div class="activity-payment-method">국민은행</div>
        <div class="activity-price outcome">+2,750,000원</div>
      </div>
      <div class="activity-row">
        <div class="activity-category-tag">생활</div>
        <div class="activity-content">이마트에서 생필품</div>
        <div class="activity-payment-method">현대카드</div>
        <div class="activity-price outcome">-17,200</div>
      </div>  
    `;
  }
}
