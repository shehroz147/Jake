import Link from 'react-router/lib/Link';
import React, { PropTypes } from 'react';

import TrendSelect from './TrendSelect';
import StateSelect from './StateSelect';
import YearSelect from './YearSelect';

const Navigation = props => (
  <nav>
    <div>
      <ul>
        <li>
          <Link to="/">Home </Link>
          <Link to="/snapshot">Snapshot</Link>
          <Link to="/trend">Trends</Link>
        </li>
      </ul>
      <TrendSelect changeTrend={props.changeTrend} trend={props.trend} />
      <StateSelect changeState={props.changeState} state={props.state} />
      <YearSelect changeYear={props.changeYear} year={props.year} />

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
