import React from 'react';
import Link from 'react-router/lib/Link';

const IndexPage = () => (
  <div className="">
    <div className="c-panel">
      <h1 className="o-heading-main">Welcome to The Civic Health Index</h1>
      <div className="c-panel">
        <div className="c-panel__head">
          <h2 className="o-heading-section">Tracking Civic Health</h2>
        </div>
        <div className="c-panel__content">
          <p>
            Check out our trend comparison system
            which allows you to compare
            two states against each other
            next to the national average.
          </p>
          <Link to="/compare" >
            <button className="c-button">
                Compare States
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
