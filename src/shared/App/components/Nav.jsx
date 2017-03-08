import Link from 'react-router/lib/Link';
import React from 'react';

const Nav = () => (

  <nav className="c-navbar">

    <div className="o-wrapper">

      <div className="o-flex-layout">


        <li className="o-flex-layout__item">
          <h1 className="o-heading-nav">Civic Health Index</h1>
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
                to="admin"
              >
                Admin
              </Link>
            </li>

            <li className="o-list-inline__item">
              <Link
                className="c-nav__link"
                to="uploader"
              >
                Upload
              </Link>
            </li>

            <li className="o-list-inline__item">
              <Link
                className="c-nav__link"
                to="login"
              >
                Login
              </Link>
            </li>

            <li className="o-list-inline__item">
              <Link
                className="c-nav__link"
                to="signup"
              >
                Signup
              </Link>
            </li>

          </ul>
        </div>

      </div>

    </div>

  </nav>
);


export default Nav;
