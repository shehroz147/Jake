import React, { PropTypes } from 'react';

// Select
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import SnapShotSelect from './Select/SnapShotSelect';
import Trend from './Trend';
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const Snapshot = (props) => {
  const {
    data,
  } = props;

  return (
    <div className="container">
      <div className="c-panel__head">
        <SnapShotSelect {...props} />
      </div>
      <div className="c-panel">
        <div className="row">
          <Trend {...props} />
        </div>
      </div>
    </div>
  );
};

Snapshot.propTypes = {
  data: PropTypes.shape({}),
};

export default Snapshot;
