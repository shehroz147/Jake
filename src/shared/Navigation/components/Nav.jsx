import Link from 'react-router/lib/Link';
import React from 'react';

const Nav = ({ authenticated, logout }) => (
  <nav className="c-navbar">
    <div className="o-wrapper">
      <div className="o-flex-layout">
        <ul className="c-nav-list o-list-inline">
          <div className="o-flex-layout__item">
            <li className="o-list-inline__item">
              <Link
                className="o-heading-nav"
                to="/"
              >
                  CHI
              </Link>
            </li>
          </div>
          <div className="o-flex-layout__item">
            <li className="o-list-inline__item">
              <Link
                className="c-nav__link"
                to="/"
              >
                  Home
                </Link>
            </li>
          </div>
          <div className="o-flex-layout__item">
            <li className="o-list-inline__item">
              <Link
                className="c-nav__link"
                to="reports"
              >
                  Reports
              </Link>
            </li>
          </div>
          <div className="o-flex-layout__item">
            <li className="o-list-inline__item">
              <Link
                className="c-nav__link"
                to="compare"
              >
                Compare
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
