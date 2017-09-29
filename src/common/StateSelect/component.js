import React, { Component } from 'react';

import stateData from '../Data/stateData.json';

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
            {stateData.map(
              (data, key) =>
                <option
                  key={key}
                  value={data.state}
                >
                  {data.state}
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
            {stateData.map(
              (data, key) =>
                <option
                  key={key}
                  value={data.state}
                >
                  {data.state}
                </option>
            )}
          </select>
        </div>
      </div>
      <div>
        <h2>Volunteer</h2>
        <YearSelect />

        <Volunteer state={primary} filter={filteredPrimary}  {...props} />
        <Volunteer state={secondary} filter={filteredSecondary} {...props} />
        <Volunteer state={tertiary} filter={filteredTertiary} {...props} />
      </div>
    </div>
  );
}

export default StateSelect;
