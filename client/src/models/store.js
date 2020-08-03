import apis from 'api';

class Store {
  constructor() {
    this._observers = new Set();
    this.data = {
      userId: 9,
      activities: [],
      currentMonth: null,
    };
    this.init();
  }

  async init() {
    const currentMonth = new Date().getMonth() + 1;
    const activities = await apis.getActivities(this.data.userId, currentMonth);
    this.data = { ...this.data, currentMonth: currentMonth, ...activities };
    this.notify(this.data);
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
      .forEach((subscriber) => {
        subscriber.observer(data);
      });
  }
}

export const store = new Store();
