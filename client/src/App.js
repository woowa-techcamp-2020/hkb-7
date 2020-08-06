import 'styles/common.scss';
import Router from 'Router';
import LoginPage from 'views/pages/LoginPage';
import MainPage from 'views/pages/MainPage';
import { saveTokenInLocalStorage, identified } from '../src/utils/identity';
import {store } from 'models/store';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.store = store;

    if (!identified()) {
      saveTokenInLocalStorage(document.cookie);
    }
    if (identified()) {
      this.router = new Router();
      this.$view = new MainPage($target);
      this.store.init(localStorage.getItem('token'));
    } else {
      this.LoginPage = new LoginPage($target);
    }
  }
}
