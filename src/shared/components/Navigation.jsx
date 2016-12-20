import Link from 'react-router/lib/Link';
import React, { PropTypes } from 'react';

const Navigation = props => (
  <nav className="c-navbar" >
    <div>
      <ul className="o-list-inline c-nav">
        <li>
          <Link to="/">Home </Link>
          <Link to="/snapshot">Snapshot</Link>
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  </nav>
);

Navigation.propTypes = {
  state: PropTypes.string,
  trend: PropTypes.string,
  year: PropTypes.string,
  changeTrend: PropTypes.func,
  changeState: PropTypes.func,
  changeYear: PropTypes.func,
};

export default Navigation;
