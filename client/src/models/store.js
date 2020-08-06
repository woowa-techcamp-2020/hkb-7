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
      rawActivities: [],
      total: {},
      paymentMethods: [],
      categories: [],
      filter: {
        income: 'checked',
        outcome: 'checked',
      },
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
    this.data.rawActivities = activities;
    return { total, ...this.applyFilter({ ...this.data.filter }) };
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

  clickFilter(isIncome, prevState) {
    isIncome ? this.toggleIncomeFilter(prevState) : this.toggleOutcomeFilter(prevState);
  }

  toggleIncomeFilter(prevState) {
    const state = prevState ? '' : 'checked';
    this.data.filter.income = state;
    this.data = { ...this.data, ...this.applyFilter({ ...this.data.filter }) };
    this.notify(this.data, 'clickFilter');
  }

  toggleOutcomeFilter(prevState) {
    const state = prevState ? '' : 'checked';
    this.data.filter.outcome = state;
    this.data = { ...this.data, ...this.applyFilter({ ...this.data.filter }) };
    this.notify(this.data, 'clickFilter');
  }

  applyFilter({ income, outcome }) {
    const temp = [...this.data.rawActivities];
    if (!income) {
      this.data.rawActivities = this.data.rawActivities.reduce((acc, cur) => {
        if (cur.is_income === 1) {
          return acc;
        }
        return [...acc, cur];
      }, []);
    }
    if (!outcome) {
      this.data.rawActivities = this.data.rawActivities.reduce((acc, cur) => {
        if (cur.is_income === 0) {
          return acc;
        }
        return [...acc, cur];
      }, []);
    }
    return { activities: this.classifyDate(this.data.rawActivities), rawActivities: temp };
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
