import apis from 'api';

class Store {
  constructor() {
    this._observers = new Set();
    this.data = {
      activities: [],
      currentMonth: null,
    };
    this.init();
  }

  async init() {
    const activities = await apis.getActivities();
    const currentMonth = new Date().getMonth() + 1;
    this.data = { ...this.data, currentMonth: currentMonth, ...activities };
    this.notifyAll(this.data);
  }

  subscribe(component, state) {
    this._observers.add({ observer: component, key: state });
  }

  unsubscribe(component) {
    this._observers = [...this._observers].filter((subscriber) => subscriber.observer !== component);
  }

  notifyAll(data) {
    this._observers.forEach((subscriber) => subscriber.observer(data));
  }

  notify(data, state) {
    [...this._observers]
      .filter((subscriber) => subscriber.key === state)
      .forEach((subscriber) => subscriber.observer(data));
  }
}

export const store = new Store();
