import './styles.scss';
import Header from 'components/Header';
import SectionNavigator from 'components/SectionNavigator';
import SectionContainer from 'components/SectionContainer';
import Form from 'components/Form';
import { element } from 'utils/element';
import { store } from 'models/store';

export default class MainPage {
  constructor($target) {
    this.$App = $target;
    this.store = store;
    this.store.subscribe((data) => this.render(data), 'init');
    this.store.subscribe((data) => this.render(data), 'stateChange');

    this.createHeader();
    this.createMainContainer();
    this.createNavigator();
    this.createSectionContainer();
    this.createForm();
  }

  createHeader() {
    this.$Header = new Header(this.$App);
  }

  createMainContainer() {
    this.$Container = element('div', {
      className: 'main-container',
    });
    this.$App.appendChild(this.$Container);
  }

  createNavigator() {
    this.$SectionNavigator = new SectionNavigator(this.$Container);
  }

  createSectionContainer() {
    this.$SectionContainer = new SectionContainer(this.$Container);
  }

  createForm() {
    this.$Form = new Form(this.$Container);
  }

  render(data) {
    this.$Header.render(data);
    this.$SectionNavigator.render(data);
    this.$SectionContainer.render(data);
    this.$Form.render(data);
  }

  setState() {}
}
