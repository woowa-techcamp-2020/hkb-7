import './styles.scss';
import { element } from 'utils/element';

export default class ActivityItem {
  constructor($target, id) {
    this.$target = $target;

    this.$ActivityItem = element('div', {
      className: 'activity-day-item',
      id: `activity-day-item-${id}`,
    });

    this.$target.appendChild(this.$ActivityItem);
  }

  render({ is_income, category, content, payment, price }) {
    this.$ActivityItem.innerHTML = `
      <div class="activity-day-item-category">
        <div class="activity-day-item-label-text ${is_income ? 'positive' : 'negative'}">${category}</div>
      </div>
      <div class="activity-day-item-contents">${content}</div>
      <div class="activity-day-payment-method">${payment}</div>
      <div class="activity-day-item-price ${is_income ? 'positive' : 'negative'}">${
      is_income ? '' : '-'
    }${price}원</div>
    `;
  }

  remove() {
    this.$ActivityItem.remove();
  }
}
