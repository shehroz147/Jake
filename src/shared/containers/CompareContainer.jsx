import { connect } from 'react-redux';

import Compare from '../components/Compare';

import {
  changeState1,
  changeState2,
  changeTrend,
  changeYear,
} from '../actions/compare';

import {
  trendSelector,
  yearSelector,
} from '../selectors/options';

import {
  state1Selector,
  state2Selector,
} from '../selectors/compare';

import { filteredDataSelector } from '../selectors/data';

const mapStateToProps = state => ({
  data: filteredDataSelector(state),
  trend: trendSelector(state),
  state1: state1Selector(state),
  state2: state2Selector(state),
  year: yearSelector(state),
});

export default connect(mapStateToProps,
  {
    changeState1,
    changeState2,
    changeTrend,
    changeYear })(Compare);
