import { connect } from 'react-redux';

import App from '../components/App';
import { changeTrend, changeState, changeYear } from '../actions/options';
import { trendSelector, stateSelector, yearSelector } from '../selectors/options';

const mapStateToProps = state => ({
  trend: trendSelector(state),
  state: stateSelector(state),
  year: yearSelector(state),
});

export default connect(mapStateToProps, { changeTrend, changeState, changeYear })(App);
