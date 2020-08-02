import apis from 'api';

class Store {
  constructor() {
    this._observers = new Set();
    this.data = {
      activities: [],
    };
    this.init();
  }

  async init() {
    const activities = await apis.getActivities();
    this.data = { ...this.data, ...activities };
  }

  subscribe(component, state) {
    this._observers.add({ observer: component, key: state });
  }

  unsubscribe(component) {
    this._observers = [...this._observers].filter((subscriber) => subscriber.observer !== component);
  }

  notify(state) {
    this._observers.filter((subscriber) => subscriber.key === state).forEach((observer) => observer(state));
  }
}

export const store = new Store();
