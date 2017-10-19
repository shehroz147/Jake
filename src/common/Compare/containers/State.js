import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import State from '../components/State';
import * as CompareActions from '../actions';

class StateContainer extends React.Component {
  componentDidMount() {
    const {
      primary,
      secondary,
      selectRandomPrimaryState,
      selectRandomSecondaryState,
    } = this.props;

    if (!primary) {
      selectRandomPrimaryState();
    }

    if (!secondary) {
      selectRandomSecondaryState();
    }
  }

   render() {
     return <State {...this.props} />;
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  selectRandomPrimaryState: CompareActions.selectRandomPrimaryState,
  selectRandomSecondaryState: CompareActions.selectRandomSecondaryState,
}, dispatch);

export default connect(null, mapDispatchToProps)(StateContainer);
