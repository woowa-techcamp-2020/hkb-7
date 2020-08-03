export default class Observable {
  constructor() {
    this._observers = new Set();
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
