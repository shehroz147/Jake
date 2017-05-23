import React from 'react';
import { Link } from 'react-router';
import { Container } from 'wolfshark';

const NotFoundPage = () => (
  <Container>
    <div className="c-panel">
      <h1 className="o-heading-main u-m0">404</h1>
      <h2 className="o-heading-section">Page not found!</h2>
      <p>
        <Link to="/">Go back to the main page</Link>
      </p>
    </div>
  </Container>
);

export default NotFoundPage;
