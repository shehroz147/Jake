import React, { Component } from 'react';

import StateSelect from './State';
import MetroSelect from './Metro';

const Select = (props) => {
  const {
    selectType,
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
      <div>
        <button
          onClick={() => selectType(nextType)}
          >
            {(type === 'state') ? 'Compare Metro' : 'Compare State'}
          </button>
        </div>
      <Component {...props} />

    </div>
  )
}

export default Select;
