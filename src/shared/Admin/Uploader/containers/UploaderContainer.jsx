import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Uploader from '../components/Uploader';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  handleUpload: (uploadEvent) => {
    uploadEvent.preventDefault();
    console.log(uploadEvent);
  },
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);
