import React from 'react';
import Link from 'react-router/lib/Link';

const UploaderDashboard = () => (
  <div>
    <div>
      <div>
        <ul>
          <li>
            <Link
              to="/uploader"
            >
              Upload Reports
            </Link>
          </li>
          <li>
            <Link
              to="dashboard/uploader"
            >
              Upload Trend Data
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default UploaderDashboard;
