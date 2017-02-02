import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Organization = (props) => {
  const {
    state1,
    state2,
  } = props;

  if (!state1.organizationPercent || !state2.organizationPercent) {
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
            <BarGraph percentage={state1.organizationPercent} />
          </div>

        </div>
      </div>

      <div className="o-layout__item ui-1/2">
        <div className="c-panel">

          <div className="c-panel__head">
            <h2 className="c-panel__heading">
              {state1.state}
            </h2>
          </div>

          <div className="c-panel__content">
            <BarGraph percentage={state1.organizationPercent} />
            <h3 className="c-panel__heading">
              Rank - {state1.organizationRank}
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
            {state2 && <BarGraph percentage={state2.volunteerPercent} />}
            <h3 className="c-panel__heading">
              Rank - {state2.volunteerRank}
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

Organization.propTypes = {
  state1: PropTypes.shape({
    organizationPercent: PropTypes.number.isRequired,
    organizationRank: PropTypes.number.isRequired,
  }).isRequired,
  state2: PropTypes.shape({
    organizationPercent: PropTypes.number.isRequired,
    organizationRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Organization;
