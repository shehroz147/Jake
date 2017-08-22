import { connect } from 'react-redux';

import Layout from '../components/Layout';
import { logout } from '../../Admin/Forms/Login/actions';

const mapStateToProps = ({ auth }) => {
  let authenticated = false;

  if (Object.keys(auth.token).length > 0) {
    authenticated = true;
  }

  return {
    authenticated,
  };
};

export default connect(mapStateToProps)(Layout);
