import React, { Component } from 'react';

import Volunteer from '../Trends/components/Volunteer';
import Voted from '../Trends/components/Voted';
import YearSelect from '../YearSelect/container';

const MetroSelect = (props) => {
  const {
    primary,
    secondary,
    filteredPrimary,
    filteredSecondary,
    selectPrimary,
    selectSecondary,
    selectYear,
    selectMetroSize,
    metroList,
    volunteer
  } = props;

  return (
    <div>
      <div>
        <div>
          <h2>Filter by Metro Size</h2>
          <button value="3" onClick={selectMetroSize}>Large</button>
          <button value="2" onClick={selectMetroSize}>Medium</button>
          <button value="1" onClick={selectMetroSize}>Small</button>
        </div>
        <div>
          <h1>Metro1 Select</h1>
          <select
            onChange={selectPrimary}
            value={primary}
          >
            {metroList.map(
              (metro, key) =>
                <option
                  key={key}
                  value={metro.metro}
                >
                  {metro.metro}
                </option>
            )}
          </select>
        </div>
      </div>

      <div>
        <div>
          <h1>Metro2 Select</h1>
          <select
            onChange={selectSecondary}
            value={secondary}
          >
            {metroList.map(
              (metro, key) =>
                <option
                  key={key}
                  value={metro.metro}
                >
                  {metro.metro}
                </option>
            )}
          </select>
        </div>
      </div>
      <div>
        <h2>Volunteer</h2>
        <YearSelect trend="volunteer_percent" />
        <Volunteer state={primary} filter={filteredPrimary} {...props} />
        <Volunteer state={secondary} filter={filteredSecondary} {...props} />

        <h2>Volunteer</h2>
        <YearSelect trend="voted_percent" />
        <Voted state={primary} filter={filteredPrimary} {...props} />
        <Voted state={secondary} filter={filteredSecondary} {...props} />
      </div>
    </div>
  )
}

export default MetroSelect;
