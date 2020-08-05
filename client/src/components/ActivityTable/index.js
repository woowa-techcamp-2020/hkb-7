import './styles.scss';
import { element } from 'utils/element';
import { html } from 'utils/html';

export default class ActivityTable {
  constructor($target) {
    this.$target = $target;

    this.$ActivityTable = element('div', {
      className: 'activity-table',
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

        <div class="activity-day-item">
          <div class="activity-day-item-label-text negative">식비</div>
        </div>
        <div class="activity-day-item-contents">버거킹에서 점심 식사</div>
        <div class="activity-day-payment-method">카카오뱅크 카드</div>
        <div class="activity-day-item-price">13,000원</div>

        <div class="activity-day-item">
          <div class="activity-day-item-label-text negative">교통비</div>
        </div>
        <div class="activity-day-item-contents">8호선 지하철 탑승</div>
        <div class="activity-day-payment-method">카카오뱅크 후불교통카드</div>
        <div class="activity-day-item-price">1,250원</div>

        <div class="activity-day-item">
          <div class="activity-day-item-label-text positive">월급</div>
        </div>
        <div class="activity-day-item-contents">우아한테크캠프 월급</div>
        <div class="activity-day-payment-method">신한은행 계좌</div>
        <div class="activity-day-item-price">1,380,000원</div>
      </div>
      <div class="daily-activity-card">
        <div class="activity-date">
          8월 3일 월요일
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

        <div class="activity-day-item">
          <div class="activity-day-item-label-text negative">식비</div>
        </div>
        <div class="activity-day-item-contents">버거킹에서 점심 식사</div>
        <div class="activity-day-payment-method">카카오뱅크 카드</div>
        <div class="activity-day-item-price">13,000원</div>

        <div class="activity-day-item">
          <div class="activity-day-item-label-text negative">교통비</div>
        </div>
        <div class="activity-day-item-contents">8호선 지하철 탑승</div>
        <div class="activity-day-payment-method">카카오뱅크 후불교통카드</div>
        <div class="activity-day-item-price">1,250원</div>

        <div class="activity-day-item">
          <div class="activity-day-item-label-text positive">월급</div>
        </div>
        <div class="activity-day-item-contents">우아한테크캠프 월급</div>
        <div class="activity-day-payment-method">신한은행 계좌</div>
        <div class="activity-day-item-price">1,380,000원</div>
      </div>
      <div class="daily-activity-card">
        <div class="activity-date">
          8월 2일 일요일
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

        <div class="activity-day-item">
          <div class="activity-day-item-label-text negative">식비</div>
        </div>
        <div class="activity-day-item-contents">버거킹에서 점심 식사</div>
        <div class="activity-day-payment-method">카카오뱅크 카드</div>
        <div class="activity-day-item-price">13,000원</div>

        <div class="activity-day-item">
          <div class="activity-day-item-label-text negative">교통비</div>
        </div>
        <div class="activity-day-item-contents">8호선 지하철 탑승</div>
        <div class="activity-day-payment-method">카카오뱅크 후불교통카드</div>
        <div class="activity-day-item-price">1,250원</div>

        <div class="activity-day-item">
          <div class="activity-day-item-label-text positive">월급</div>
        </div>
        <div class="activity-day-item-contents">우아한테크캠프 월급</div>
        <div class="activity-day-payment-method">신한은행 계좌</div>
        <div class="activity-day-item-price">1,380,000원</div>
      </div>
      <div class="daily-activity-card">
        <div class="activity-date">
          8월 1일 토요일
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

        <div class="activity-day-item">
          <div class="activity-day-item-label-text negative">식비</div>
        </div>
        <div class="activity-day-item-contents">버거킹에서 점심 식사</div>
        <div class="activity-day-payment-method">카카오뱅크 카드</div>
        <div class="activity-day-item-price">13,000원</div>

        <div class="activity-day-item">
          <div class="activity-day-item-label-text negative">교통비</div>
        </div>
        <div class="activity-day-item-contents">8호선 지하철 탑승</div>
        <div class="activity-day-payment-method">카카오뱅크 후불교통카드</div>
        <div class="activity-day-item-price">1,250원</div>

        <div class="activity-day-item">
          <div class="activity-day-item-label-text positive">월급</div>
        </div>
        <div class="activity-day-item-contents">우아한테크캠프 월급</div>
        <div class="activity-day-payment-method">신한은행 계좌</div>
        <div class="activity-day-item-price">1,380,000원</div>
      </div>
    `;
  }
}
