import React, { PropTypes } from 'react';

// Graphs
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Graph from './Graph';
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Selects
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Trend from './Select/Trend';
import State from './Select/State';
import Year from './Select/Year';
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Trends
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Boycotted from './Trend/Boycotted';
import Community from './Trend/Community';
import Contacted from './Trend/Contacted';
import Donated from './Trend/Donated';
import Group from './Trend/Group';
import Meeting from './Trend/Meeting';
import Organization from './Trend/Organization';
import Registered from './Trend/Registered';
import Volunteer from './Trend/Volunteer';
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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
    <div className="container">
      <div className="c-panel">
        <div className="row">
          <Trend className="col small-third" changeTrend={changeTrend} trend={trend} />
          <State className="col small-third" changeState={changeState} state={state} />
          <Year className="col small-third" changeYear={changeYear} year={year} />
        </div>
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
  changeTrend: PropTypes.func,
  changeState: PropTypes.func,
  changeYear: PropTypes.func,
  data: PropTypes.func,
  state: PropTypes.string,
  trend: PropTypes.string,
  year: PropTypes.string,
};

export default Snapshot;
