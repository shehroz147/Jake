import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StateSelect from './component';

import {
  selectPrimary,
  selectSecondary,
} from './actions';

import {
  primaryStateSelector,
  secondaryStateSelector,
  tertiaryStateSelector,
  filteredPrimaryStateSelector,
  filteredSecondaryStateSelector,
  filteredTertiaryStateSelector,
} from './selectors';

const mapStateToProps = state => ({
  primary: primaryStateSelector(state),
  secondary: secondaryStateSelector(state),
  tertiary: tertiaryStateSelector(state),
  filteredPrimary: filteredPrimaryStateSelector(state),
  filteredSecondary: filteredSecondaryStateSelector(state),
  filteredTertiary: filteredTertiaryStateSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectPrimary: ({ target }) => selectPrimary(target.value),
  selectSecondary: ({ target }) => selectSecondary(target.value),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StateSelect);
