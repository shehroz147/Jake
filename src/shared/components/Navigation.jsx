import Link from 'react-router/lib/link';
import React, { PropTypes } from 'react';

import Select from './Select';

const Navigation = props => (
  <nav>
    <div>
      <ul>
        <li>
          <Link to="/">Home </Link>
          <Link to="/snapshot">Snapshot</Link>
        </li>
      </ul>
      <Select changeState={props.changeState} />
    </div>
  </nav>
);

Navigation.propTypes = {
  state: PropTypes.string,
};

export default Navigation;
