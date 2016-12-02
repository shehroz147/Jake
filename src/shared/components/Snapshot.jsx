import React, { PropTypes } from 'react';

const Snapshot = props => {
  // const {} = props;

  return (
    <div>
      {props.state}
      {/* <h1>{snapshot.title}</h1> */}
      {/* <p>{snapshot.percent}</p> */}

    </div>
  );
};

Snapshot.propTypes = {};

export default Snapshot;
