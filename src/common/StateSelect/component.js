import React, { Component } from 'react';

import stateList from './constants';

import Volunteer from '../Trends/components/Volunteer';
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

        <Volunteer state={primary} filter={filteredPrimary}  {...props} />
        <Volunteer state={secondary} filter={filteredSecondary} {...props} />
        <Volunteer state={tertiary} filter={filteredTertiary} {...props} />
        <YearSelect />

      </div>
    </div>
  );
}

export default StateSelect;
