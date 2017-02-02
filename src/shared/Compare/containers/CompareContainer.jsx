import { connect } from 'react-redux';

import Compare from '../components/Compare';

import {
  changeTrend,
  changeState1,
  changeState2,
  changeYear,
} from '../../Select/action';

import {
  trendSelector,
  state1Selector,
  state2Selector,
  yearSelector,
} from '../../Select/selector';

import {
  filteredState1Selector,
  filteredState2Selector,
} from '../../App/selector';

const mapStateToProps = state => ({
  state1: filteredState1Selector(state),
  state2: filteredState2Selector(state),
  state1Select: state1Selector(state),
  state2Select: state2Selector(state),
  trend: trendSelector(state),
  year: yearSelector(state),
});

export default connect(mapStateToProps, {
  changeTrend,
  changeState1,
  changeState2,
  changeYear,
})(Compare);
