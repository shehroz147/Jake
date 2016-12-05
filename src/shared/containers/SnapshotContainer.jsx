import { connect } from 'react-redux';

import Snapshot from '../components/Snapshot';
import { stateSelector } from '../selectors/state';

const mapStateToProps = state => ({
  state: stateSelector(state),
});

export default connect(mapStateToProps)(Snapshot);
