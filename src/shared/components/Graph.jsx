import React, { PropTypes } from 'react';

const Graph = props => {
  return (
    <div>
      <div class="c-panel__head">
        <h2 class="c-panel__heading">Attended Meetings</h2>
      </div>
      <div class="c-panel__content">
      <p>
        {/* State Title */}
      </p>
      <div class="c-bar">
        {/* Call data from array based off selection */}
        <div class="c-graph" data-percentage="7">7%</div>
      </div>
      <p>
        {/* National Average */}
      </p>
      <div class="c-bar">
        {/* Within this graph call nation values key in the array for data-percentage */}
        <div class="c-graph" data-percentage="9">9%</div>
      </div>

    </div>
  );
};

Graph.propTypes = {};

export default Graph;
