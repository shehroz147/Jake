import Link from 'react-router/lib/Link';
import React, { Children, PropTypes } from 'react';

import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ authenticated, children, logout }) => (
  <div className="o-wrapper">
    <div className="">
      <Nav
        authenticated={authenticated}
        logout={logout}
      />
      <div className="o-wrapper--main">
        {Children.only(children)}
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
