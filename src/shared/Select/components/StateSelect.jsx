import React, { PropTypes } from 'react';

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'National Average',
];

const StateSelect = props => (
  <div className="">
    <div className="">
      <select
        className="c-select"
        name="state"
        onChange={(event) => {
          const state = event.target.value;
          props.changeState(state);
        }}
        value={props.state}
      >
        {states.map(state => (
          <option
            key={state}
            value={state}
          >
            {state}
          </option>
          ))}
      </select>
    </div>
  </div>
);

StateSelect.propTypes = {
  state: PropTypes.shape({}).isRequired,
};

export default StateSelect;
