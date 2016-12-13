import React, { PropTypes } from 'react';

import Graph from './Graph';
import TrendSelect from './TrendSelect';
import StateSelect from './StateSelect';
import Volunteer from './Volunteer';
import YearSelect from './YearSelect';

import Meeting from './Meeting';
import Community from './Community';
import Donated from './Donated';
import Boycotted from './Boycotted';
import Registered from './Registered';
import Contacted from './Contacted';
import Group from './Group';
import Organization from './Organization';

const getTrendComponent = (props) => {
  switch (props.trend) {
    case 'volunteer': return <Volunteer {...props} />;
    case 'meeting': return <Meeting {...props} />;
    case 'community': return <Community {...props} />;
    case 'donated': return <Donated {...props} />;
    case 'boycotted': return <Boycotted {...props} />;
    case 'registered': return <Registered {...props} />;
    case 'contacted': return <Contacted {...props} />;
    case 'group': return <Group {...props} />;
    case 'organization': return <Organization {...props} />;
    default: return (<p>Select a trend.</p>);
  }
};

const Snapshot = (props) => {
  const {
    changeState,
    changeTrend,
    changeYear,
    data,
    state,
    trend,
    year,
  } = props;

  console.log(data);

  return (
    <div>
      <div className="c-panel">
        <TrendSelect changeTrend={changeTrend} trend={trend} />
        <StateSelect changeState={changeState} state={state} />
        <YearSelect changeYear={changeYear} year={year} />
        <div className="c-panel__head">
          <h1 className="o-heading-sub">{data.state} - {data.year}</h1>
        </div>
        <div className="c-panel__content">
          {getTrendComponent(props)}
        </div>
      </div>
    </div>
  );
};

Snapshot.propTypes = {
  state: PropTypes.string,
  changeTrend: PropTypes.func,
  changeState: PropTypes.func,
  changeYear: PropTypes.func,
};

export default Snapshot;
