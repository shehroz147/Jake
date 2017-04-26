import React, { PropTypes } from 'react';

import StateSelect from './StateSelect';

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Connecticut',
  'Delaware',
  // 'District of Columbia',
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

const ChangeStateButton = props => (
  <div className="o-flex-layout">
    <div className="o-flex-layout__item o-flex-layout__item--shrink">
      <button
        className="c-button"
        onClick={() => {
          let index = states.indexOf(props.state) - 1;
          if (index < 0) {
            index = states.length - 1;
          }

          const prevState = states[index];
          props.changeState(prevState);
        }}
      >
        &larr;
      </button>
    </div>
    <div className="o-flex-layout__item o-flex-layout__item--grow u-text-center u-p0">
      <StateSelect {...props} />
    </div>
    <div className="o-flex-layout__item o-flex-layout__item--shrink u-p0">
      <button
        className="c-button"
        onClick={() => {
          let index = states.indexOf(props.state) + 1;
          if (index >= states.length) {
            index = 0;
          }

          const nextState = states[index];
          props.changeState(nextState);
        }}
        type="button"
        value={props.state}
      >
        &rarr;
      </button>
    </div>
  </div>
);

ChangeStateButton.propTypes = {
  changeState: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default ChangeStateButton;
