import 'styles/common.scss';
import MainPage from 'views/pages/MainPage';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.$view = new MainPage($target);

    this.fetchData();
  }

  fetchData() {
    this.$view.setState();
  }
}
