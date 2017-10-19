import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Metro from '../components/Metro';
import * as CompareActions from '../actions';
import * as CompareSelectors from '../selectors';

class MetroContainer extends React.Component {
  componentDidMount() {
    const {
      metros,
      primary,
      secondary,
      selectRandomPrimaryMetro,
      selectRandomSecondaryMetro,
    } = this.props;

    if (!primary) {
      selectRandomPrimaryMetro(metros);
    }

    if (!secondary) {
      selectRandomSecondaryMetro(metros);
    }
  }

  render() {
    return <Metro {...this.props} />
  }
}

const mapStateToProps = state => ({
  metros: CompareSelectors.listMetros(state),
  size: CompareSelectors.size(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectSize: CompareActions.selectSize,
  selectRandomPrimaryMetro: CompareActions.selectRandomPrimaryMetro,
  selectRandomSecondaryMetro: CompareActions.selectRandomSecondaryMetro,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MetroContainer);
