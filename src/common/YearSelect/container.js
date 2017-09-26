import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import YearSelect from './component';

import {
  selectYear,
} from './actions';

import {
  yearSelector,
} from './selectors';

const mapStateToProps = state => ({
  year: yearSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectYear: ({ target }) => selectYear(target.value),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(YearSelect);
