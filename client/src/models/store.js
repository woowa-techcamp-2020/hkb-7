import Observable from './observable';
import apis from 'api';

class Store extends Observable {
  constructor() {
    super();
    this.data = {
      userId: 9,
      activities: {
        date: {
          dailyActivities: null,
          dailyTotal: null,
        },
      },
      currentMonth: null,
      total: {},
    };
    this.init();
  }

  async init() {
    const currentMonth = new Date().getMonth() + 1;
    const activities = await apis.getActivities(this.data.userId, currentMonth);
    const total = this.calcTotal(activities);
    this.data = { ...this.data, total, currentMonth: currentMonth, activities: this.classifyDate(activities) };
    this.notify(this.data);
  }

  async prevMonth() {
    const activities = await apis.getActivities(this.data.userId, --this.data.currentMonth);
    const total = this.calcTotal(activities);
    this.data = { ...this.data, total, activities: this.classifyDate(activities) };
    this.notify(this.data, 'currentMonth');
    this.notify(this.data, 'activities');
  }

  async nextMonth() {
    const activities = await apis.getActivities(this.data.userId, ++this.data.currentMonth);
    const total = this.calcTotal(activities);
    this.data = { ...this.data, total, activities: this.classifyDate(activities) };
    this.notify(this.data, 'currentMonth');
    this.notify(this.data, 'activities');
  }

  calcTotal(activities) {
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

  classifyDate(activities) {
    const days = activities.reduce((acc, cur) => {
      acc[cur.date] = acc[cur.date]
        ? { dailyActivities: [...acc[cur.date].dailyActivities, cur] }
        : { dailyActivities: [cur] };
      return acc;
    }, {});

    Object.keys(days).forEach((day) => {
      days[day].dailyTotal = this.calcTotal(days[day].dailyActivities);
    });

    return days;
  }
}

export const store = new Store();
