import React from 'react';

const IndexPage = () => (
  <div className="o-wrapper">
    <h1 className="o-heading-main">Civic Health Index</h1>
    <div className="o-layout">
      <div className="o-layout__item u-1/2">
        <p className="u-text++">
          Welcome to The Civic Health Index our mission is to keep you up to date on civic trends and how each state ranks againt the national average using our <a href="/compare">comparison system</a>. Also check out our <a href="/reports">reports</a> page to see yearly reports about our nations civic health
        </p>
      </div>
      <div className="o-layout__item u-1/2">
      <a href="http://placehold.it" className="u-m">
      <img src="http://placehold.it/300x150" alt="placeholder" />
    </a>
  </div>
    </div>
  </div>
);

export default IndexPage;
