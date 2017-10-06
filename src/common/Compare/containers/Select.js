import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Compare from '../';

import * as CompareSelectors from '../selectors';
import * as CompareActions from '../actions';

const makeMapStateToProps = (initialState, initialProps) => {
  const yearList = CompareSelectors.makeYearList(initialProps.trend);

  const mapStateToProps = (state, ownProps) => ({
    primaryData: CompareSelectors.primaryData(state),
    secondaryData: CompareSelectors.secondaryData(state),
    tertiaryData: CompareSelectors.tertiaryData(state),
    metroList: CompareSelectors.metroList(state),
    primary: CompareSelectors.primarySelector(state),
    secondary: CompareSelectors.secondarySelector(state),
    type: state.selection.type,
    tertiary: CompareSelectors.tertiarySelector(state),
    year: CompareSelectors.yearSelector(state),
    yearList: yearList(state, ownProps.trend),
  });

  return mapStateToProps;
};

const mapDispatchToProps = dispatch => bindActionCreators({
  selectType: CompareActions.selectType,
  selectPrimary: ({ target }) => CompareActions.selectPrimary(target.value),
  selectSecondary: ({ target }) => CompareActions.selectSecondary(target.value),
  selectYear: ({ target }) => CompareActions.selectYear(target.value),
  selectMetroSize: ({ target }) => CompareActions.selectMetroSize(target.value),
}, dispatch);

export default connect(makeMapStateToProps, mapDispatchToProps)(Compare);
