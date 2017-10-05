import React, { Component } from 'react';

import stateList from './constants';

import Volunteer from '../Trends/components/Volunteer';
import Voted from '../Trends/components/Voted';
import YearSelect from '../YearSelect/container';

const StateSelect = (props) => {
  const {
    filteredPrimary,
    filteredSecondary,
    filteredTertiary,
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
        <YearSelect trend="volunteer_percent" />
        <Volunteer state={primary} filter={filteredPrimary}  {...props} />
        <Volunteer state={secondary} filter={filteredSecondary} {...props} />
        <Volunteer state={tertiary} filter={filteredTertiary} {...props} />

        <h2>Voted</h2>
        <YearSelect trend="voted_percent" />
        <Voted state={primary} filter={filteredPrimary}  {...props} />
        <Voted state={secondary} filter={filteredSecondary} {...props} />
        <Voted state={tertiary} filter={filteredTertiary} {...props} />

      </div>
    </div>
  );
}

export default StateSelect;
