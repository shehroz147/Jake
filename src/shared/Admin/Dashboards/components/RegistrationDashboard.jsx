import React from 'react';
import Link from 'react-router/lib/Link';

const RegistrationDashboard = () => (
  <div className="c-navbar--inverse">
    <div className="o-wrapper">
      <div className="o-flex-layout">
        <ul className="o-list-inline c-nav">

          <li className="o-list-inline__item">
            <Link
              className="c-nav__link--inverse"
              to="/login"
            >
              Login
            </Link>
          </li>

          <li className="o-list-inline__item">
            <Link
              className="c-nav__link--inverse"
              to="/signup"
            >
              Signup
            </Link>
          </li>

        </ul>
      </div>
    </div>
  </div>
);

export default RegistrationDashboard;
