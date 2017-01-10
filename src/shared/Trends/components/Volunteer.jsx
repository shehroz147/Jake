import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';
import TrendSelect from '../../Select/components/Trend';
import StateSelect from '../../Select/components/State';

const Volunteer = (props) => {
  const {
    changeCompare,
    compare,
    compareData,
    data,
  } = props;

  console.log(props);

  if (!data.volunteerPercent) {
    return (
      <div className="c-panel__head">
        <h2 className="c-panel__heading"><TrendSelect {...props} /></h2>
        <p>No data for this trend</p>
      </div>
    );
  }

  return (
    <div>
      <div className="">
        <div className="c-panel__content">
          <div className="c-panel__head">
            <h2 className="o-heading-sub">
              <StateSelect className="" {...props} />
            </h2>
          </div>
          <BarGraph
            percentage={data.volunteerPercent}
          />
          <h3>Rank - {data.volunteerRank}</h3>
        </div>
      </div>
      <div>
        <div className="c-panel">
          <div className="c-panel__content">
            <div className="c-panel__head">
              <h2 className="o-heading-sub">
                <StateSelect className="" changeState={changeCompare} state={compare} />
              </h2>
            </div>
            {compareData && <BarGraph percentage={compareData.volunteerPercent} />}
            <h3>Rank - {compareData.volunteerRank}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Volunteer.propTypes = {
  changeCompare: PropTypes.func,
  compare: PropTypes.string,
  compareData: PropTypes.string,
  data: PropTypes.shape({
    volunteerPercent: PropTypes.number.isRequired,
    volunteerRank: PropTypes.number.isRequired,
  }),
};

export default Volunteer;
