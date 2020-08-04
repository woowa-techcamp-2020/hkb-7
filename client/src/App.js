import 'styles/common.scss';
import Router from 'Router';
import MainPage from 'views/pages/MainPage';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.router = new Router();
    this.$view = new MainPage($target);
  }
}
