import './styles.scss';
import Header from 'components/Header';
import MonthNavigator from 'components/MonthNavigator';
import SectionNavigator from 'components/SectionNavigator';
import ActivitySection from 'views/sections/ActivitySection';
import CalendarSection from 'views/sections/CalendarSection';
import StatisticSection from 'views/sections/StatisticSection';
import { element } from 'utils/element';

export default class MainPage {
  constructor($target) {
    this.$App = $target;

    this.$Container = element('div', {
      className: 'main-container',
    });
    this.$Header = new Header(this.$App);

    this.render();
  }

  render() {
    this.$App.appendChild(this.$Container);
    this.$MonthNavigator = new MonthNavigator(this.$Container);
    this.$SectionNavigator = new SectionNavigator(this.$Container);
    this.$ActivitySection = new ActivitySection(this.$Container);
  }

  setState() {}
}
