import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Trend from '../components/Trend';
import * as TrendSelectors from '../selectors';
import * as TrendActions from '../actions';

class TrendContainer extends React.Component {
  componentDidMount() {
    const {
      selectYear,
      year,
      years,
    } = this.props;

    if (years.indexOf(year) === -1) {
      selectYear(years[years.length - 1]);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      selectYear,
      year,
      years,
    } = this.props;

    if (years === prevProps.years) {
      return;
    }

    if (years.indexOf(year) === -1) {
      selectYear(years[years.length - 1]);
    }
  }

  render() {
    return <Trend {...this.props} />;
  }
}

const makeMapStateToProps = (initialState, initialProps) => {
  const listYears = TrendSelectors.makelistYears(initialProps.trend);

  const mapStateToProps = (state, ownProps) => ({
    primaryData: TrendSelectors.getPrimaryData(state, ownProps),
    secondaryData: TrendSelectors.getSecondaryData(state, ownProps),
    tertiaryData: TrendSelectors.getTertiaryData(state, ownProps),
    year: TrendSelectors.getYear(state, ownProps),
    years: listYears(state, ownProps),
  });

  return mapStateToProps;
};

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  selectYear: (year) => TrendActions.selectYear(ownProps.trend, ownProps.type, year),
}, dispatch);

export default connect(makeMapStateToProps, mapDispatchToProps)(TrendContainer);
