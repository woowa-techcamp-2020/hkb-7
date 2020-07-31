import './styles.scss';

export default function Header() {
  return `
    <header class="header">
      <div class="header-title">우아한 가계부</div>
      <button class="payment-manage-button">결제 수단 관리</button>
    </header>
  `;
}
