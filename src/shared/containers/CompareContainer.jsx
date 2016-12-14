import { connect } from 'react-redux';

import Compare from '../components/Compare';

import { compareStates } from '../actions/compare';

import { filteredDataSelector } from '../selectors/data';

const mapStateToProps = state => ({
  data: filteredDataSelector(state),
  state: compareStates(state),
});

export default connect(mapStateToProps, { compareStates })(Compare);
