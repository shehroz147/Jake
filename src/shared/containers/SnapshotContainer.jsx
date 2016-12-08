import { connect } from 'react-redux';

import Snapshot from '../components/Snapshot';
import {
  trendSelector,
  stateSelector,
  yearSelector,
} from '../selectors/options';

const mapStateToProps = state => ({
  trend: trendSelector(state),
  state: stateSelector(state),
  year: yearSelector(state),
});

export default connect(mapStateToProps)(Snapshot);
