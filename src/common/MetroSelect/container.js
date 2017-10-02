import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MetroSelect from './component';

import {
  selectPrimary,
  selectSecondary,
  selectMetroSize,
} from './actions';

import {
  primaryMetroSelector,
  secondaryMetroSelector,
  filteredPrimaryMetroSelector,
  filteredSecondaryMetroSelector,
} from './selectors';

const mapStateToProps = state => ({
  primary: state.metro.primary,
  secondary: state.metro.secondary,
  filteredPrimary: filteredPrimaryMetroSelector(state),
  filteredSecondary: filteredSecondaryMetroSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectPrimary: ({ target }) => selectPrimary(target.value),
  selectSecondary: ({ target }) => selectSecondary(target.value),
  selectMetroSize: ({ target }) => selectMetroSize(target.value),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MetroSelect);
