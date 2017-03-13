import React, { PropTypes } from 'react';

const BarGraph = props => (
  <div>
    <div className="">
      <div className="c-bar">
        <div
          className="c-graph"
          data-percentage={Math.round(props.percentage)}
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
  percentage: PropTypes.number.isRequired,
};

export default BarGraph;
