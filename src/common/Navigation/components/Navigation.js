import injectSheet from 'react-jss';
import Link from 'react-router/lib/Link';
import React from 'react';
import {
  Container,
  Nav,
  NavItem,
  NavLink,
} from 'react-mako';

const Navigation = () => {
  return (
    <Container>
      <Nav>
        <NavItem>
          <NavLink to="/" type={Link}><strong>Florida Civic Health</strong></NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/compare" type={Link}>Compare</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/reports" type={Link}>Reports</NavLink>
        </NavItem>
      </Nav>
    </Container>
  );
};

export default Navigation;
