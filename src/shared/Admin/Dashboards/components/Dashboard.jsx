import React from 'react';
import Link from 'react-router/lib/Link';

const Dashboard = () => (
  <div className="o-wrapper--sidenav">
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
          <li>
            <Link
              to="/uploader"
            >
              Uploader
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Dashboard;
