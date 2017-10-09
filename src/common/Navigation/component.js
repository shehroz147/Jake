import React from 'react';
import Link from 'react-router/lib/Link';

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/compare">Compare</Link>
        </li>
      </ul>
    </div>
  )
}
export default Navigation;
