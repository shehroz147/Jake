import React from 'react';
import Link from 'react-router/lib/Link';

const SignupSuccess = () => (
  <div className="o-wrapper o-wrapper--narrow">
    <div className="c-panel">
      <div className="c-panel__head">
        <h1 className="c-panel__heading u-text-center">Thank You for Registering</h1>
      </div>
      <div className="c-panel__content">
        <p>
          You have now subcribed to recive our updates to turn off updates go to your
          <Link to="/profile">profile page</Link> to turn them off.
        </p>

        <Link className="c-button c-button--primary c-button--block" to="/compare">
          Start Comparing
        </Link>
      </div>
    </div>
  </div>
);

export default SignupSuccess;
