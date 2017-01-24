import Link from 'react-router/lib/Link';
import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="o-wrapper">
        <ul className="c-navbar c-nav o-list-inline">

          <li>
            <Link
              className="c-nav__link o-list-inline__item o-list-bare"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="c-nav__link o-list-inline__item o-list-bare"
              to="/reports"
            >
              Reports
            </Link>
          </li>

          <li>
            <Link
              className="c-nav__link o-list-inline__item o-list-bare"
              to="/compare"
            >
              Compare
            </Link>
          </li>

        </ul>

        {this.props.children}
      </div>
    );
  }
}
