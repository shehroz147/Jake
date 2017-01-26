import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Group = (props) => {
  const { data } = props;

  if (!data.groupPercent) {
    return (
      <div className="c-panel__head">
        <p>No data for this trend</p>
      </div>
    );
  }

  return (
    <div className="c-panel">
      <div className="c-panel__content">
        <BarGraph
          percentage={data.groupPercent}
        />
        <h3>Rank - {data.groupRank}</h3>
      </div>
    </div>
  );
};

Group.propTypes = {
  data: PropTypes.shape({
    groupPercent: PropTypes.number.isRequired,
    groupRank: PropTypes.number.isRequired,
  }),
};

export default Group;
