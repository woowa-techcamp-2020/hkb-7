import Observable from './observable';
import apis from 'api';

class Store extends Observable {
  constructor() {
    super();
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

  async prevMonth() {
    const activities = await apis.getActivities(this.data.userId, --this.data.currentMonth);
    this.data = { ...this.data, ...activities };
    this.notify(this.data, 'currentMonth');
    this.notify(this.data, 'activities');
  }

  async nextMonth() {
    const activities = await apis.getActivities(this.data.userId, ++this.data.currentMonth);
    this.data = { ...this.data, ...activities };
    this.notify(this.data, 'currentMonth');
    this.notify(this.data, 'activities');
  }
}

export const store = new Store();
