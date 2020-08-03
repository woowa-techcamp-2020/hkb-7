import Observable from './observable';
import apis from 'api';

class Store extends Observable {
  constructor() {
    super();
    this.data = {
      userId: 9,
      activities: [],
      currentMonth: null,
      total: {},
    };
    this.init();
  }

  async init() {
    const currentMonth = new Date().getMonth() + 1;
    const activities = await apis.getActivities(this.data.userId, currentMonth);
    const total = this.calcTotal(activities);
    this.data = { ...this.data, total, currentMonth: currentMonth, ...activities };
    this.notify(this.data);
  }

  async prevMonth() {
    const activities = await apis.getActivities(this.data.userId, --this.data.currentMonth);
    const total = this.calcTotal(activities);
    this.data = { ...this.data, total, ...activities };
    this.notify(this.data, 'currentMonth');
    this.notify(this.data, 'activities');
  }

  async nextMonth() {
    const activities = await apis.getActivities(this.data.userId, ++this.data.currentMonth);
    const total = this.calcTotal(activities);
    this.data = { ...this.data, total, ...activities };
    this.notify(this.data, 'currentMonth');
    this.notify(this.data, 'activities');
  }

  calcTotal({ activities }) {
    return activities.reduce(
      (acc, cur) => {
        if (cur.is_income === 1) {
          acc.income += cur.price;
          return acc;
        }
        acc.outcome += cur.price;
        return acc;
      },
      { income: 0, outcome: 0 },
    );
  }
}

export const store = new Store();
