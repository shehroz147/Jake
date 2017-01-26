import React, { PropTypes } from 'react';

const BarGraph = (props) => (
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


BarGraph.propTypes = {
  percentage: PropTypes.number,
};

export default BarGraph;
