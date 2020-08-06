import './styles.scss';
import { element } from 'utils/element';

export default class LoginPage {
  constructor($target) {
    this.$App = $target;
    this.createLoginModal();
  }

  createHeader() {
    this.$Header = new Header(this.$App);
  }

  createLoginModal() {
    this.$loginModal = element('div', {
      className: 'login-modal',
    });
    this.$loginModal.innerHTML = `
      <a href = "http://${window.location.hostname}:3000/user/google/">Login with google</a>
      `;
    this.$App.appendChild(this.$loginModal);
  }
}
