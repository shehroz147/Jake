import React, { Component } from 'react';

import StateSelect from '../StateSelect/container';
import MetroSelect from '../MetroSelect/container';

const Select = (props) => {
  const {
    changeType,
    type,
  } = props;

  const nextType = type === 'state'
    ? 'metro'
    : 'state';

  const Component = type === 'state'
    ? StateSelect
    : MetroSelect;

  return (
    <div>
      <h1>{(type === 'state') ? 'Compare State' : 'Compare Metro'}</h1>
      <Component />

      <div>
        <button
          onClick={() => changeType(nextType)}
        >
          {(type === 'state') ? 'Compare Metro' : 'Compare State'}
        </button>
      </div>
    </div>
  )
}

export default Select;
