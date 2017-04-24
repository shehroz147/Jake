import Link from 'react-router/lib/Link';
import React from 'react';

import SideNav from '../../Navigation/components/SideNav';

const Footer = ({ authenticated, logout }) => (
  <div className="">
    <div className="c-footer">
      <ul>
        {/* <div className="o-flex-layout__item">
          <li className="o-list-inline__item">
            <Link
              className="c-nav__link"
              to="dashboard"
            >
              Admin
            </Link>
          </li>
        </div> */}
        <SideNav />
        <div className="o-flex-layout__item">
          {authenticated && (
            <li className="o-list-inline__item">
              <button
                className="c-nav__link"
                to="logout"
                onClick={(event) => {
                  event.preventDefault();
                  logout();
                }}
              >
                Logout
              </button>
            </li>
          )}
        </div>
      </ul>
    </div>
  </div>
);

export default Footer;
