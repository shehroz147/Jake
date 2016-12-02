import { connect } from 'react-redux';

import App from '../components/App';
import { changeState } from '../actions/state';
import { stateSelector } from '../selectors/state';

const mapStateToProps = state => ({
  state: stateSelector(state),
});

export default connect(mapStateToProps, { changeState })(App);
