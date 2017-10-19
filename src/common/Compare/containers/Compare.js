import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Compare from '../components/Compare';

import * as CompareSelectors from '../selectors';
import * as CompareActions from '../actions';
import * as CompareConstants from '../constants';

const mapStateToProps = state => ({
  primary: CompareSelectors.primary(state),
  secondary: CompareSelectors.secondary(state),
  type: CompareSelectors.type(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectType: CompareActions.selectType,
  selectPrimary: ({ target }) => CompareActions.selectPrimary(target.value),
  selectSecondary: ({ target }) => CompareActions.selectSecondary(target.value),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
