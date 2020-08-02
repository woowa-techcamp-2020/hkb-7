import './styles.scss';
import { element } from 'utils/element';

export default class Header {
  constructor($target) {
    this.$target = $target;

    this.$Header = element('header', {
      className: 'header',
    });

    this.$target.appendChild(this.$Header);
  }

  init() {
    this.$Header.innerHTML = `
      <div class="header-title">우아한 가계부</div>
      <button class="payment-manage-button">결제 수단 관리</button>
    `;
  }
}
