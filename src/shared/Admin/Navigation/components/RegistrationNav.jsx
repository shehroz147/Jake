import React from 'react';
import Link from 'react-router/lib/Link';

const RegistrationDashboard = () => (
  <div>
    <div>
      <div>
        <ul>
          <li>
            <Link
              to="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default RegistrationDashboard;
