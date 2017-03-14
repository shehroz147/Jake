import React from 'react';

import StateSelect from '../../Select/components/StateSelect';
import CompareSelect from '../../Select/components/CompareSelect';

const NoTrend = (props) => {
  const {
    state1,
    state2,
    changeState1,
    changeState2,
  } = props;

  return (
    <div className="o-layout">
      <CompareSelect
        className="o-layout__item"
        {...props}
      />
      <div className="o-layout__item u-1/2">
        <div className="c-panel">
          <div className="c-panel__head">
            <div className="c-panel__heading">
              <StateSelect
                changeState={changeState1}
                state={state1.state}
              />
            </div>
          </div>
          <div className="c-panel__content">
            <p className="o-layout__item u-text-center">
              No data
            </p>
          </div>
        </div>
      </div>
      <div className="o-layout__item u-1/2">
        <div className="c-panel">
          <div className="c-panel__head">
            <div className="c-panel__heading">
              <StateSelect
                changeState={changeState2}
                state={state2.state}
              />
            </div>
          </div>
          <div className="c-panel__content">
            <p className="o-layout__item u-text-center">
              No data
            </p>
          </div>
        </div>
      </div>
      <h1 className="o-layout__item o-heading-sub u-text-center">
        Try Selecting another State or Trend
      </h1>
    </div>
  );
};

export default NoTrend;
