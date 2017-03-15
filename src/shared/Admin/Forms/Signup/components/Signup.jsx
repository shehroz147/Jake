import React from 'react';

const Signup = () => (
  <div>
    <h1>Signup</h1>

    <form action="/signup" method="post">
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button type="submit">Signup</button>
    </form>
  </div>
);

export default Signup;
