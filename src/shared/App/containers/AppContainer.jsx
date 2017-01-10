import { connect } from 'react-redux';

import App from '../components/App';

import {
  changeTrend,
  changeState,
  changeYear,
} from '../../Select/action';

import {
  trendSelector,
  stateSelector,
  yearSelector,
} from '../../Select/selector';

const mapStateToProps = state => ({
  trend: trendSelector(state),
  state: stateSelector(state),
  year: yearSelector(state),
});

export default connect(mapStateToProps, { changeTrend, changeState, changeYear })(App);
