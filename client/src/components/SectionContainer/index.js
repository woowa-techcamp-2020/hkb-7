import './styles.scss';
import { element } from 'utils/element';
import MonthBar from 'components/MonthBar';
import ActivitySection from 'components/Sections/ActivitySection';
import CalendarSection from 'components/Sections/CalendarSection';
import StatisticSection from 'components/Sections/StatisticSection';
import { store } from 'models/store';

export default class SectionContainer {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'moveSection');

    this.$SectionContainer = element('div', {
      className: 'section-container middle-col',
    });

    this.$Section = element('div', {
      className: 'section',
    });

    this.$MonthBar = new MonthBar(this.$SectionContainer);
    this.$target.appendChild(this.$SectionContainer);
    this.$SectionContainer.appendChild(this.$Section);
  }

  render(data) {
    this.$MonthBar.render(data);
    this.selectSection(data);
  }

  selectSection(data) {
    this.$Section.innerHTML = '';
    switch (data.path) {
      case '/activity':
        this.$ActivitySection = new ActivitySection(this.$Section);
        this.$ActivitySection.render(data);
        break;
      case '/calendar':
        this.$CalendarSection = new CalendarSection(this.$Section);
        this.$CalendarSection.render(data);
        break;
      case '/statistic':
        this.$StatisticSection = new StatisticSection(this.$Section);
        this.$StatisticSection.render(data);
        break;
    }
  }
}
