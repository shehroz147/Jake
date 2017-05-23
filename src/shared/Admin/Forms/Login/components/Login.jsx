import React from 'react';
import { Container } from 'wolfshark';

const Login = () => (
  <Container>
    <div className="c-panel">
      <div className="c-panel__head">
        <h1 className="o-heading-sub">Login</h1>
      </div>

      <div className="c-panel__content">

        <form className="c-form" action="/login" method="post">
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

          <button className="c-button" type="submit">Login</button>

        </form>

      </div>
    </div>
  </Container>
);

export default Login;
