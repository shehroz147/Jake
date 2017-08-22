import React from 'react';
import { Container, Heading, Hero } from 'wolfshark';

const Header = () => (
  <Hero color="primary">
    <Container>
      <Heading>Welcome to Civic Health Index</Heading>

      <p className="u-text++">
       Our mission is to keep you up to date on civic trends and how each state ranks againt the national average using our <a href="/compare">comparison system</a>. Also check out our <a href="/reports">reports</a> page to see yearly reports about our nations civic health
      </p>
    </Container>
  </Hero>

);

export default Header;
