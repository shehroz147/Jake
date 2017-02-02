import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Registered = (props) => {
  const {
    state1,
    state2,
  } = props;

  if (!state1.votePercent || !state2.votePercent) {
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
            <BarGraph percentage={state1.votePercent} />
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
            <BarGraph percentage={state1.votePercent} />
            <h3 className="c-panel__heading">
              Rank - {state1.voteRank}
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
            {state2 && <BarGraph percentage={state2.votePercent} />}
            <h3 className="c-panel__heading">
              Rank - {state2.voteRank}
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

Registered.propTypes = {
  state1: PropTypes.shape({
    votePercent: PropTypes.number.isRequired,
    voteRank: PropTypes.number.isRequired,
  }).isRequired,
  state2: PropTypes.shape({
    votePercent: PropTypes.number.isRequired,
    voteRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Registered;
