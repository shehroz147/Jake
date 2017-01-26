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

const State = props => (
  <div className="container">
    <div className="col small-third">
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

State.propTypes = {
  changeState: PropTypes.func,
  state: PropTypes.string,
};

export default State;
