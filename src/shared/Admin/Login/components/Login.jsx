import React from 'react';

const Login = () => (
  <div>
    <h1>Login</h1>
    <form action="/login" method="post">
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default Login;
