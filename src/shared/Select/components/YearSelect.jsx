import React from 'react';
import PropTypes from 'prop-types';

const YearSelect = props => (
  <select
    className="c-select"
    onChange={(event) => {
      const year = event.target.value;
      props.changeYear(year);
    }}
    value={props.year}
  >
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
    <option value="2014">2014</option>
  </select>
);

YearSelect.propTypes = {
  changeYear: PropTypes.func.isRequired,
  year: PropTypes.string.isRequired,
};

export default YearSelect;
