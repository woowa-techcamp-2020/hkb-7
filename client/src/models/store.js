import Observable from './observable';
import apis from 'api';

class Store extends Observable {
  constructor() {
    super();
    this.data = {
      userId: 9,
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      activities: {
        date: {
          dailyActivities: null,
          dailyTotal: null,
        },
      },
      total: {},
    };
    this.init(this.data.userId, this.data.year, this.data.month);
  }

  async init(userId, year, month) {
    this.data = { ...this.data, ...(await this.getData(userId, year, month)) };
    this.notify(this.data, 'init');
  }

  async getData(userId, year, month) {
    const activities = await apis.getActivities(userId, year, month);
    const total = this.calcTotal(activities);
    return { total, activities: this.classifyDate(activities) };
  }

  async moveMonth(month) {
    if (month === 0) {
      this.data.month = 12;
      this.data.year--;
    }
    if (month === 13) {
      this.data.month = 1;
      this.data.year++;
    }
    this.data = { ...this.data, ...(await this.getData(this.data.userId, this.data.year, this.data.month)) };
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
