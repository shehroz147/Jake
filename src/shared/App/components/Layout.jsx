import Link from 'react-router/lib/Link';
import React, { Children, PropTypes } from 'react';

import Footer from '../../Footer/components/Footer';
import Nav from '../../Navigation/components/Nav';

const Layout = ({ authenticated, children, logout }) => (
  <div className="root">
    <Nav
      authenticated={authenticated}
      logout={logout}
    />
    {Children.only(children)}
    <Footer />
  </div>
);

export default Layout;
