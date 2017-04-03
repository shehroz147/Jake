import React from 'react';

import Dashboard from '../../Admin/Dashboards/components/Dashboard';

const SideNav = () => (
  <div className="page-wrap">
    <label htmlFor="sidebartoggler" className="toggle">⇧</label>
    <input type="checkbox" id="sidebartoggler" className="" />
    <div className="sidebar">
      {/* <ul className="">
        <li className=""><a href="/">Home</a></li>
        <li className=""><a href="/">Portfolio</a></li>
        <li className=""><a href="/">About</a></li>
        <li className=""><a href="/">Blog</a></li>
        <li className=""><a href="/">Contact</a></li>
      </ul> */}
      <Dashboard />
    </div>
  </div>
);

export default SideNav;
