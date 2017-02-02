import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Meeting = (props) => {
  const {
    state1,
    state2,
  } = props;

  if (!state1.meetingPercent || !state2.meetingPercent) {
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
            <BarGraph percentage={state1.meetingPercent} />
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
            <BarGraph percentage={state1.meetingPercent} />
            <h3 className="c-panel__heading">
              Rank - {state1.meetingRank}
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
            {state2 && <BarGraph percentage={state2.meetingPercent} />}
            <h3 className="c-panel__heading">
              Rank - {state2.meetingRank}
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

Meeting.propTypes = {
  state1: PropTypes.shape({
    meetingPercent: PropTypes.number.isRequired,
    meetingRank: PropTypes.number.isRequired,
  }).isRequired,
  state2: PropTypes.shape({
    meetingPercent: PropTypes.number.isRequired,
    meetingRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Meeting;
