import Page from 'pages/Page';
import './style.scss';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.$page = new Page();
  }
}
