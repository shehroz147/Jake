import Link from 'react-router/lib/link';
import React, { PropTypes } from 'react';

const Navigation = props => (
  <nav>
    <div>
      <select
        onChange={event => {
          const state = event.target.value;
          props.changeState(state);
        }}
        value={props.state}
      >
        <option value="alabama">Alabama</option>
        <option value="alaska">Alaska</option>
        <option value="arizona">Arizona</option>
        <option value="florida">Florida</option>
      </select>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  </nav>
);

Navigation.propTypes = {};

export default Navigation;
