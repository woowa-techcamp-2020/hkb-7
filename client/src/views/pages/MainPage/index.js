import './styles.scss';
import Header from 'components/Header';
import MonthNavigator from 'components/MonthNavigator';
import SectionNavigator from 'components/SectionNavigator';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ActivityTable from 'components/ActivityTable';

export default function MainPage() {
  return `
    ${Header()}
    ${MonthNavigator()}
    ${SectionNavigator()}
    ${Form()}
    ${Filter()}
    ${ActivityTable()}
  `;
}
