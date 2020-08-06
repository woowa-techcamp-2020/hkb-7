import Observable from './observable';
import apis from 'api';

class Store extends Observable {
  constructor() {
    super();
    this.data = {
      token: localStorage.getItem('token'),
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
      filter: {
        income: true,
        outcome: true,
      },
    };
    // this.init(this.data.token, this.data.year, this.data.month);
  }

  async init(token) {
    this.data.token = token;
    this.data = {
      ...this.data,
      ...(await this.fetchActivities(token, this.data.year, this.data.month)),
      ...(await this.fetchPaymentMethods(token)),
      ...(await this.fetchCategories(token)),
    };
    this.notify(this.data, 'init');
  }

  async fetchActivities(token, year, month) {
    const activities = await apis.getActivities(token, year, month);
    const total = this.calcTotal(activities);
    return { total, activities: this.classifyDate(activities) };
  }

  async fetchPaymentMethods(token) {
    const paymentMethods = await apis.getPaymentMethods(token);
    return { paymentMethods };
  }

  async fetchCategories(token) {
    const categories = await apis.getCategories(token);
    return { categories };
  }

  moveSection(tab) {
    this.data.path = tab;
    this.notify(this.data, 'moveSection');
  }

  clickFilter(isIncome) {
    isIncome
      ? (this.data.filter.income = !this.data.filter.income)
      : (this.data.filter.outcome = !this.data.filter.outcome);
    this.notify(this.data, 'clickFilter');
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
    this.data = { ...this.data, ...(await this.fetchActivities(this.data.token, this.data.year, this.data.month)) };
    this.notify(this.data, 'moveMonth');
  }

  async addActivity(info) {
    info.token = this.data.token;
    await apis.createActivity(info);
    this.data = { ...this.data, ...(await this.fetchActivities(this.data.token, this.data.year, this.data.month)) };
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
