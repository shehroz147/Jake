import React, { Component } from 'react';

import metroData from '../Data/metroData.json';

import Volunteer from '../Trends/components/Volunteer';

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
  } = props;

  return (
    <div>
      <div>
        <div>
          <h2>Filter by Metro Size</h2>
          <button value="1" onClick={selectMetroSize}>Large</button>
          <button value="2" onClick={selectMetroSize}>Medium</button>
          <button value="3" onClick={selectMetroSize}>Small</button>
        </div>
        <div>
          <h1>Metro1 Select</h1>
          <select
            onChange={selectPrimary}
            value={primary}
          >
            {metroData.map(
              (data, key) =>
                <option
                  key={key}
                  value={data.metro}
                >
                  {data.metro}
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
            {metroData.map(
              (data, key) =>
                <option
                  key={key}
                  value={data.metro}
                >
                  {data.metro}
                </option>
            )}
          </select>
        </div>
      </div>
      <div>
        <h2>Volunteer</h2>
        <Volunteer state={primary} filter={filteredPrimary} {...props} />
        <Volunteer state={secondary} filter={filteredSecondary} {...props} />
      </div>
    </div>
  )
}

export default MetroSelect;
