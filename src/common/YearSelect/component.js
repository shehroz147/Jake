import React from 'react';

const years = [
  '2017',
  '2016',
  '2015',
  '2014',
  '2013',
  '2012',
  '2011',
  '2010',
  '2009',
  '2008',
  'All Years'
];

const YearSelect = (props) => {
  const {
    selectYear,
    year,
  } = props;

  // if (year === 'All Years') {
  //   return (
  //     <LineGraph trend={} {...props} />
  //   )
  // }

  return (
    <div>
      <select
        onChange={selectYear}
        value={year}
      >
        {years.map(
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

export default YearSelect;
