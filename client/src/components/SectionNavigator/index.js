import './styles.scss';
import { element } from 'utils/element';
import { bindEvent } from 'utils/bindEvent';
import { store } from 'models/store';

export default class SectionNavigator {
  constructor($target) {
    this.$target = $target;
    this.store = store;
    this.pathList = ['/activity/', '/calendar/', '/statistic/'];

    this.$SectionNavigator = element('ul', {
      className: 'section-navigator',
    });

    this.$target.appendChild(this.$SectionNavigator);
  }

  render(data) {
    this.$SectionNavigator.innerHTML = `
      <li class="section-tab activity">내역</li>
      <li class="section-tab calendar">달력</li>
      <li class="section-tab statistic">통계</li>
    `;

    this.pathList.forEach((path) => {
      if (path !== data.path) {
        bindEvent(`.section-tab.${path.slice(1, -1)}`, 'click', () => {
          this.store.moveSection(path);
        });
      }
    });
  }
}
