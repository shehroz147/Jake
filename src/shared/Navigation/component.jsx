import Link from 'react-router/lib/Link';
import React from 'react';
import {
  Navbar,
  NavbarItem,
  Nav,
  NavItem,
  NavLink,
} from 'wolfshark';

const Navigation = ({ authenticated, logout }) => (
  <Navbar>
    <NavbarItem>
      <NavLink
        to="/"
        type={Link}
      >
        CHI
      </NavLink>
    </NavbarItem>
    <NavbarItem fill />
    <NavbarItem>
      <Nav>
        <NavItem>
          <NavLink
            to="/"
            type={Link}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/reports"
            type={Link}
          >
            Reports
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/compare"
            type={Link}
          >
            Compare
          </NavLink>
        </NavItem>
      </Nav>
    </NavbarItem>
  </Navbar>
);

export default Navigation;
