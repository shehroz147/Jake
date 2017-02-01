import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => (
  <div className="">
    <h1 className="o-heading-main u-text-center">404</h1>
    <h2 className="o-heading-sub u-text-center">Page not found!</h2>
    <p
      className="u-text-right"
    >
      <Link to="/">Go back to the main page</Link>
    </p>
  </div>
);

export default NotFoundPage;
