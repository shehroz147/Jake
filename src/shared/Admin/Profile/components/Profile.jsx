import React from 'react';

const Profile = user => (
  <div>
    <h1>Profile</h1>

    <ul>
      <li>Email: <strong>{user.email}</strong></li>
      <li>Password: <strong>{user.password}</strong></li>
    </ul>
  </div>
);

export default Profile;
