import React from 'react';
import Link from 'react-router/lib/Link';

const Dashboard = () => (
  <div>
    <div>
      <div>
        <ul>
          <li>
            <Link
              to="/upload"
            >
              Uploaders
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
            >
              Login / Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Dashboard;
