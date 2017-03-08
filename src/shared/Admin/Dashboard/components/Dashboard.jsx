import React from 'react';
import { Link } from 'react-router/lib/Link';

const Dashboard = () => (
  <div>
    <div>
      <ul>
        <li>
          <Link
            className=""
            to="login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className=""
            to="signup"
          >
            Signup
          </Link>
        </li>
        <li>
          <Link
            className=""
            to="login"
          >
            Uploader
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Dashboard;
