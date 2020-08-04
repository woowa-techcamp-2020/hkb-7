import './styles.scss';
import Header from 'components/Header';
import SectionNavigator from 'components/SectionNavigator';
import MonthNavigator from 'components/MonthNavigator';
import Filter from 'components/Filter';
import ActivitySection from 'views/sections/ActivitySection';
import FormSection from 'views/sections/FormSection';
import CalendarSection from 'views/sections/CalendarSection';
import StatisticSection from 'views/sections/StatisticSection';
import { element } from 'utils/element';
import { store } from 'models/store';

export default class MainPage {
  constructor($target) {
    this.$App = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'init');
    this.store.subscribe((data) => this.render(data), 'stateChange');
    this.store.subscribe((data) => this.selectSection(data), 'moveSection');

    this.$SectionContainerTopBar = element('div', {
      className: 'section-container-top-bar',
    });
    this.$SectionContainer = element(
      'div',
      {
        className: 'section-container middle-col',
      },
      this.$SectionContainerTopBar,
    );

    this.createHeader();
    this.createNavigator();
    this.createSectionContainer();
    this.$Header.init();
  }

  render(data) {
    this.$MonthNavigator.render(data);
    this.selectSection(data);
  }

  createHeader() {
    this.$Header = new Header(this.$App);
  }

  createNavigator() {
    this.$Container = element('div', {
      className: 'main-container',
    });
    this.$App.appendChild(this.$Container);
    this.$SectionNavigator = new SectionNavigator(this.$Container);
    this.$MonthNavigator = new MonthNavigator(this.$SectionContainerTopBar);
    this.$Filter = new Filter(this.$SectionContainerTopBar);
  }

  createSectionContainer() {
    this.$SectionContainer = element('div', {
      className: 'section-container',
    });
    this.$Container.appendChild(this.$SectionContainer);
  }

  selectSection(data) {
    this.$SectionNavigator.render(data);
    this.$SectionContainer.innerHTML = '';
    switch (data.path) {
      case '/activity/':
        this.$Section = new ActivitySection(this.$SectionContainer);
        break;
      case '/calendar/':
        this.$Section = new CalendarSection(this.$SectionContainer);
        break;
      case '/statistic/':
        this.$Section = new StatisticSection(this.$SectionContainer);
        break;
    }
    this.$Section.init(data);
  }

  setState() {}
}