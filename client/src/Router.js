import { store } from 'models/store';

export default class Router {
  constructor() {
    this.store = store;
    this.store.subscribe((data) => {
      history.replaceState(data, '', data.path);
    }, 'init');
    this.store.subscribe((data) => {
      history.pushState(data, '', data.path);
    }, 'moveMonth');
    this.store.subscribe((data) => {
      history.pushState(data, '', data.path);
    }, 'moveSection');
    this.store.subscribe((data) => {
      history.pushState(data, '', data.path);
    }, 'clickFilter');
    this.store.subscribe((data) => {
      history.pushState(data, '', data.path);
    }, 'selectItem');

    window.addEventListener('popstate', (event) => {
      this.store.notify(event.state, 'stateChange');
    });
  }
}
