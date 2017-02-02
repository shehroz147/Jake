import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Community = (props) => {
  const {
    state1,
    state2,
  } = props;

  if (!state1.communityPercent || !state2.communityPercent) {
    return (
      <div className="c-panel__head">
        <p className="c-panel__heading">
          No data for a selected States or Trend nothing to compare
        </p>
      </div>
    );
  }

  return (
    <div className="o-layout">
      <div className="o-layout__item">
        <div className="c-panel">

          <div className="c-panel__head">
            <h1 className="c-panel__heading">
              National Average
            </h1>
          </div>

          <div className="c-panel__content">
            <BarGraph percentage={state1.communityPercent} />
          </div>

        </div>
      </div>

      <div className="o-layout__item u-1/2">
        <div className="c-panel">

          <div className="c-panel__head">
            <h2 className="c-panel__heading">
              {state1.state}
            </h2>
          </div>

          <div className="c-panel__content">
            <BarGraph percentage={state1.communityPercent} />
            <h3 className="c-panel__heading">
              Rank - {state1.communityRank}
            </h3>
          </div>

        </div>
      </div>

      <div className="o-layout__item u-1/2">
        <div className="c-panel">

          <div className="c-panel__head">
            <h2 className="c-panel__heading">
              {state2.state}
            </h2>
          </div>

          <div className="c-panel__content">
            {state2 && <BarGraph percentage={state2.communityPercent} />}
            <h3 className="c-panel__heading">
              Rank - {state2.communityRank}
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

Community.propTypes = {
  state1: PropTypes.shape({
    communityPercent: PropTypes.number.isRequired,
    communityRank: PropTypes.number.isRequired,
  }).isRequired,
  state2: PropTypes.shape({
    productPercent: PropTypes.number.isRequired,
    productRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Community;
