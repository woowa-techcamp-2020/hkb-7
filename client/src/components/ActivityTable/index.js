import './styles.scss';
import { element } from 'utils/element';
import { store } from 'models/store';
import DailyActivityCard from 'components/DailyActivityCard';

export default class ActivityTable {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'moveMonth');
    this.store.subscribe((data) => this.render(data), 'clickFilter');

    this.$ActivityTable = element('div', {
      className: 'activity-table',
    });

    this.$DailyActivitiyCards = {};
    this.$target.appendChild(this.$ActivityTable);
  }

  render(data) {
    this.$ActivityTable.innerHTML = '';
    this.createDailyActivityCard(data.activities);
  }

  createDailyActivityCard(activities) {
    this.$DailyActivitiyCards = Object.keys(activities).reduce((cards, day) => {
      cards[day] = new DailyActivityCard(this.$ActivityTable, day);
      cards[day].render(activities[day]);
      return cards;
    }, {});
  }
}
