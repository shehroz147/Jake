import React, { Children } from 'react';
import Footer from '../../Footer/components/Footer';
import Nav from '../../Navigation/component';

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
