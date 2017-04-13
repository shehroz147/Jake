import Link from 'react-router/lib/Link';
import React, { Children, PropTypes } from 'react';

import Footer from './Footer';
import Nav from './Nav';
import Header from './Header';

const Layout = ({ authenticated, children, logout }) => (
  <div className="o-wrapper">
    <div className="">
      <Header />
      <Nav
        authenticated={authenticated}
        logout={logout}
      />
      <div className="">
        {Children.only(children)}
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
