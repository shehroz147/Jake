import Link from 'react-router/lib/Link';
import React from 'react';

import Nav from './Nav';

const Layout = props => (
  <div>
    <nav className="c-navbar">
      <div className="">
        <Nav />
      </div>
    </nav>
    <div className="o-wrapper o-wrapper--main">
      {props.children}
    </div>
  </div>
);

export default Layout;
