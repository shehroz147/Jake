import React from 'react';

const Year = (props) => {
  const {
    selectYear,
    year,
    yearList,
  } = props;

  return (
    <div>
      <select
        onChange={selectYear}
        value={year.year}
      >
        {yearList.map(
          (year, key) =>
            <option
              key={key}
              value={year}
            >
              {year}
            </option>
        )}
      </select>
    </div>
  )
}

export default Year;
