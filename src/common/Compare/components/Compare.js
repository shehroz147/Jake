import React, { Component } from 'react';

import Metro from '../containers/Metro';
import State from '../containers/State';
import Trend from '../../Trends';

const Select = (props) => {
  const {
    type,
  } = props;

  const Component = type === 'state' ? State : Metro;
  return [
    <Component {...props} key="compare" />,
    <Trend {...props} key="boycotted" trend="boycotted" />,
    <Trend {...props} key="community" trend="community" />,
    <Trend {...props} key="contacted" trend="contacted" />,
    <Trend {...props} key="donated" trend="donated" />,
    <Trend {...props} key="group" trend="group" />,
    <Trend {...props} key="meeting" trend="meeting" />,
    <Trend {...props} key="organization" trend="organization" />,
    // <Trend {...props} key="volunteer_hours" trend="volunteer_hours" />,
    <Trend {...props} key="volunteer" trend="volunteer" />,
    <Trend {...props} key="voted" trend="voted" />,
  ];
}

export default Select;
