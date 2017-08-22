import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'wolfshark';
import StateSelect from './StateSelect';
import states from '../constants/states';


const ChangeStateButton = props => (
  <div className="o-flex-layout">
    <div className="o-flex-layout__item o-flex-layout__item--shrink">
      <Button
        color="primary"
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
      </Button>
    </div>
    <div className="o-flex-layout__item o-flex-layout__item--grow u-text-center u-p0">
      <StateSelect {...props} />
    </div>
    <div className="o-flex-layout__item o-flex-layout__item--shrink u-p0">
      <Button
        color="primary"
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
      </Button>
    </div>
  </div>
);

ChangeStateButton.propTypes = {
  changeState: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default ChangeStateButton;
