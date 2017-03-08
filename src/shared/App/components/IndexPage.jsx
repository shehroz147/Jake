import React from 'react';
import Link from 'react-router/lib/Link';

const IndexPage = () => (
  <div className="">
    <div className="">
      <h1 className="o-heading-main">Welcome to The Civic Health Index</h1>
      <div className="c-panel">
        <div className="c-panel__head">
          <h2 className="o-heading-sub">Tracking Civic Health</h2>
        </div>
        <div className="c-panel__content">
          <p>
            Check out our trend comparison system to compare two states against each other next to the national average.
          </p>
          <button className="c-ghost-button u-text-right">
            <Link
              className=""
              to="/compare"
            >
              Compare States
            </Link>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
