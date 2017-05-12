import React from 'react';
import PropTypes from 'prop-types';

const BarGraph = props => (
  <div>
    <div>
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
