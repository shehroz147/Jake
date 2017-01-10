import { connect } from 'react-redux';

import Compare from '../components/Compare';

import {
  changeCompare,
  changeTrend,
  changeState,
  changeYear,
} from '../../Select/action';

import {
  compareSelector,
  trendSelector,
  stateSelector,
  yearSelector,
} from '../../Select/selector';

import {
  filteredCompareDataSelector,
  filteredDataSelector,
} from '../../App/selector';

const mapStateToProps = state => ({
  data: filteredDataSelector(state),
  compareData: filteredCompareDataSelector(state),
  compare: compareSelector(state),
  trend: trendSelector(state),
  state: stateSelector(state),
  year: yearSelector(state),
});

export default connect(mapStateToProps, {
  changeCompare,
  changeTrend,
  changeState,
  changeYear,
})(Compare);
