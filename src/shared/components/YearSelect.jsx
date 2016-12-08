import React, { PropTypes } from 'react';

const YearSelect = props => (
  <div>
    <select
      className="c-select"
      onChange={(event) => {
        const year = event.target.value;
        props.changeYear(year);
      }}
      value={props.year}
    >
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
      <option value="2010">2010</option>
      <option value="2009">2009</option>
      <option value="2008">2008</option>
    </select>
  </div>
);

YearSelect.propTypes = {
  changeYear: PropTypes.func,
  year: PropTypes.string,
};

export default YearSelect;
