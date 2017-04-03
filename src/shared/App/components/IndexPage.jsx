import React from 'react';
import Link from 'react-router/lib/Link';

import StateSelect from '../../Select/components/StateSelect';

const IndexPage = () => (
  <div className="c-panel">

      <h1 className="o-heading-main">Welcome to The Civic Health Index</h1>
      
        <h2 className="o-heading-sub">Tracking Civic Health</h2>
        <div>
          <p>
            Check out our trend comparison system
            which allows you to compare
            two states against each other
            next to the national average.
          </p>
          {/* <div className="o-layout--center">
            <div className="o-layout__item u-1/2">
              <StateSelect />
            </div>
            <div className="o-layout__item u-1/2">
              <StateSelect />
            </div>
          </div> */}
          <Link
            to="/compare"
          >
            <button className="c-button">
                Compare States
            </button>
          </Link>
        </div>


  </div>
);

export default IndexPage;
