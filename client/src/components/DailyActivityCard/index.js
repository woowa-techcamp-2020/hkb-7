import './styles.scss';
import { element } from 'utils/element';
import { html } from 'utils/html';

export default class DailyActivityCard {
  constructor($target) {
    this.$target = $target;

    this.$DailyActivityCard = element('div', {
      className: 'daily-activity-card',
    });

    this.$target.appendChild(this.$ActivityTable);
  }

  render(data) {
    this.$ActivityTable.innerHTML = html`
      <div class="daily-activity-card">
        <div class="activity-date">
          8월 4일 화요일
        </div>
        <div class="activity-stats">
          <span class="positive">1,380,000원</span> <span class="negative">-26,000원</span> =
          <span class="positive">1,354,000원</span>
        </div>
        <div class="activity-day-item">
          <div class="activity-day-item-label-text negative">쇼핑비</div>
        </div>
        <div class="activity-day-item-contents">키보드 구매</div>
        <div class="activity-day-payment-method">현대카드</div>
        <div class="activity-day-item-price">20,000원</div>
      </div>
    `;
  }
}
