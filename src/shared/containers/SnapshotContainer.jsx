import { connect } from 'react-redux';

import Snapshot from '../components/Snapshot';

import {
  changeTrend,
  changeState,
  changeYear,
} from '../actions/options';

import {
  trendSelector,
  stateSelector,
  yearSelector,
} from '../selectors/options';

import { filteredDataSelector } from '../selectors/data';

const mapStateToProps = state => ({
  data: filteredDataSelector(state),
  trend: trendSelector(state),
  state: stateSelector(state),
  year: yearSelector(state),
});

export default connect(mapStateToProps, { changeTrend, changeState, changeYear })(Snapshot);
