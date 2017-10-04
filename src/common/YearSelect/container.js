import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import YearSelect from './component';

import {
  selectYear,
} from './actions';

import {
  yearSelector,
  yearListSelector,
  makeYearListSelector,
} from './selectors';

const makeMapStateToProps = (initialState, initialProps) => {
  const yearListSelector = makeYearListSelector(initialProps.trend);

  const mapStateToProps = (state, ownProps) => ({
    year: yearSelector(state),
    yearList: yearListSelector(state, ownProps.trend),
  });

  return mapStateToProps;
};

const mapDispatchToProps = dispatch => bindActionCreators({
  selectYear: ({ target }) => selectYear(target.value),
}, dispatch);

export default connect(makeMapStateToProps, mapDispatchToProps)(YearSelect);
