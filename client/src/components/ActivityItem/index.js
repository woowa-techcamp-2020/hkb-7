import './styles.scss';
import { element } from 'utils/element';
import { bindEvent } from 'utils/bindEvent';
import { $A } from 'utils/helper';

export default class ActivityItem {
  constructor($target, id) {
    this.$target = $target;
    this.id = id;
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
    }${price.toLocaleString('ko-KR')}원</div>
    `;

    bindEvent(`#activity-day-item-${this.id}`, 'click', () => {
      $A('.activity-day-item').forEach((el) => {
        el.classList.remove('selected');
      });
      this.$ActivityItem.classList.add('selected');
      this.store.selectItem(this.id);
    });
  }

  remove() {
    this.$ActivityItem.remove();
  }
}
