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
      rawActivities: [],
      total: {},
      paymentMethods: [],
      categories: [],
      filter: {
        income: 'checked',
        outcome: 'checked',
      },
      selectItem: null,
      mode: 'create',
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
    this.data.rawActivities = activities;
    return { total, ...this.applyFilter({ ...this.data.filter }) };
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
    this.data = { ...this.data, ...(await this.fetchActivities(this.data.token, this.data.year, this.data.month)) };
    this.notify(this.data, 'moveMonth');
  }

  async addActivity(info) {
    info.token = this.data.token;
    await apis.createActivity(info);
    this.data = { ...this.data, ...(await this.fetchActivities(this.data.token, this.data.year, this.data.month)) };
    this.notify(this.data, 'stateChange');
  }

  async modifyActivity(info) {
    await apis.updateActivity(info);
    this.data.selectItem = null;
    this.data.mode = 'create';
    this.data = { ...this.data, ...(await this.fetchActivities(this.data.userId, this.data.year, this.data.month)) };
    this.notify(this.data, 'stateChange');
  }

  async removeActivity(item) {
    await apis.deleteActivity(item.id);
    this.data = { ...this.data, ...(await this.fetchActivities(this.data.userId, this.data.year, this.data.month)) };
    this.data.selectItem = null;
    this.data.mode = 'create';
    this.notify(this.data, 'stateChange');
  }

  async selectItem(activityId) {
    const activity = await apis.getActivity(activityId);
    this.data.selectItem = activity;
    this.data.mode = 'modify';
    this.notify(this.data, 'selectItem');
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
