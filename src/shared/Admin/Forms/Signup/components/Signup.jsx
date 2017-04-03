import Link from 'react-router/lib/Link';
import React from 'react';

const Signup = () => (
  <div className="">
    <div className="c-panel">
      <div className="c-panel__head">
        <h1 className="o-heading-sub">Signup</h1>
      </div>
      <div className="c-panel__content">
        <form className="c-form" action="/signup" method="post">
          <p>
            <input
              className="c-form-input"
              name="email"
              type="text"
              placeholder="E-mail"
            />
          </p>
          <p>
            <input
              className="c-form-input"
              name="password"
              type="password"
              placeholder="Password"
            />
          </p>
          <button className="c-button" type="submit">Signup</button>
        </form>
        <div>
          <Link to="/dashboard">Back</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Signup;
