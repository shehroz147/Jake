import Link from 'react-router/lib/Link';
import React, { PropTypes } from 'react';

const Snapshots = props => {
  const { snapshots } = props;
  return (
    <div>
      {snapshots.map(snapshot => (
        <div key={snapshot._id}>
          <h1>
            <Link to={`/snapshots/${snapshot._id}`}>
              {snapshot.title}
            </Link>
          </h1>
        </div>
      ))}
    </div>
  );
};

Snapshots.propTypes = {
  // Should Snapshots be an array of Objects?
  // snapshots: PropTypes.arrayOf(PropTypes.object),
};

export default Snapshots;
