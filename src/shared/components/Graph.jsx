import React, { PropTypes } from 'react';

const Graph = (props) => {
  return (
    <div>
      <div className="c-panel__content">
        <div className="c-bar">
          <div
            className="c-graph"
            style={{
              width: `${props.percentage}%`,
            }}
          >
            {props.percentage}%
          </div>
        </div>
      </div>
    </div>
  );
};

Graph.propTypes = {
  percentage: PropTypes.sting,
};

export default Graph;
