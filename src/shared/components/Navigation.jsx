import Link from 'react-router/lib/link';
import React, { PropTypes } from 'react';

import Select from './Select';

const Navigation = props => (
  <nav>
    <div>
      <Select changeState={props.changeState} />
      <ul>
        <li>
          <Link to="/">Home </Link>
          <Link to="/snapshot">Snapshot</Link>
        </li>
      </ul>
    </div>
  </nav>
);

Navigation.propTypes = {
  state: PropTypes.string,
};

export default Navigation;
