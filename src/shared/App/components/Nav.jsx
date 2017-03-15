import Link from 'react-router/lib/Link';
import React from 'react';

const Nav = () => (

  <nav className="c-navbar">

    <div className="o-wrapper">

      <div className="o-flex-layout">


        <li className="o-flex-layout__item">
          <Link
            className="o-heading-nav"
            to="/"
          >
            CHI
          </Link>
        </li>

        <div className="o-flex-layout__item">
          <ul className="o-list-inline c-nav c-nav--right u-text-right">

            <li className="o-list-inline__item">
              <Link
                className="c-nav__link"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="o-list-inline__item">
              <Link
                className="c-nav__link"
                to="reports"
              >
                Reports
              </Link>
            </li>

            <li className="o-list-inline__item">
              <Link
                className="c-nav__link"
                to="compare"
              >
                Compare
              </Link>
            </li>

            <li className="o-list-inline__item">
              <Link
                className="c-nav__link"
                to="dashboard"
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>

      </div>

    </div>

  </nav>
);


export default Nav;
