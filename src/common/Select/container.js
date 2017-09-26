import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Select from './component';

import { changeType } from './actions';

const mapStateToProps = state => ({
  type: state.type,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeType,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Select);
