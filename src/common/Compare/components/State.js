import React, { Component } from 'react';

import stateList from '../constants';

import Volunteer from '../../Trends/components/Volunteer';
import Voted from '../../Trends/components/Voted';
import YearSelect from './Year';

const StateSelect = (props) => {
  const {
    primaryData,
    secondaryData,
    tertiaryData,
    primary,
    secondary,
    tertiary,
    selectPrimary,
    selectSecondary,
    volunteer,
    trend,
  } = props;

  return (
    <div>
      <div>
        <div>
          <h1>State1 select</h1>
          <select
            onChange={selectPrimary}
            value={primary}
          >
            {stateList.map(
              (state, key) =>
                <option
                  key={key}
                  value={state}
                >
                  {state}
                </option>
            )}
          </select>
        </div>
      </div>
      <div>
        <div>
          <h1>State2 select</h1>
          <select
            onChange={selectSecondary}
            value={secondary}
          >
            {stateList.map(
              (state, key) =>
                <option
                  key={key}
                  value={state}
                >
                  {state}
                </option>
            )}
          </select>
        </div>
      </div>
      <div>
        <h2>Volunteer</h2>
        <YearSelect trend="volunteer_percent" {...props} />
        <Volunteer state={primary} filter={primaryData}  {...props} />
        <Volunteer state={secondary} filter={secondaryData} {...props} />
        <Volunteer state={tertiary} filter={tertiaryData} {...props} />

        <h2>Voted</h2>
        <YearSelect trend="voted_percent" {...props} />
        <Voted state={primary} filter={primaryData}  {...props} />
        <Voted state={secondary} filter={secondaryData} {...props} />
        <Voted state={tertiary} filter={tertiaryData} {...props} />

      </div>
    </div>
  );
}

export default StateSelect;
