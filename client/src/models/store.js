import Observable from './observable';
import apis from 'api';

class Store extends Observable {
  constructor() {
    super();
    this.data = {
      userId: 9,
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      path: location.pathname,
      activities: {
        date: {
          dailyActivities: null,
          dailyTotal: null,
        },
      },
      total: {},
      paymentMethods: [],
      categories: [],
    };
    this.init(this.data.userId, this.data.year, this.data.month);
  }

  async init(userId, year, month) {
    this.data = {
      ...this.data,
      ...(await this.fetchActivities(userId, year, month)),
      ...(await this.fetchPaymentMethods(userId)),
      ...(await this.fetchCategories(userId)),
    };
    this.notify(this.data, 'init');
  }

  async fetchActivities(userId, year, month) {
    const activities = await apis.getActivities(userId, year, month);
    const total = this.calcTotal(activities);
    return { total, activities: this.classifyDate(activities) };
  }

  async fetchPaymentMethods(userId) {
    const paymentMethods = await apis.getPaymentMethods(userId);
    return { paymentMethods };
  }

  async fetchCategories(userId) {
    const categories = await apis.getCategories(userId);
    return { categories };
  }

  moveSection(tab) {
    this.data.path = tab;
    this.notify(this.data, 'moveSection');
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
    this.data = { ...this.data, ...(await this.fetchActivities(this.data.userId, this.data.year, this.data.month)) };
    this.notify(this.data, 'moveMonth');
  }

  async addActivity(info) {
    await apis.createActivity(info);
    this.data = { ...this.data, ...(await this.fetchActivities(this.data.userId, this.data.year, this.data.month)) };
    this.notify(this.data, 'stateChange');
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
