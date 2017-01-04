import React, { PropTypes } from 'react';

// Select
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import SnapShotSelect from './Select/SnapShotSelect';
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
import VolunteerHours from './Trend/VolunteerHours';
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const getTrendComponent = (props) => {
  switch (props.trend) {
    case 'boycotted': return <Boycotted {...props} />;
    case 'community': return <Community {...props} />;
    case 'contacted': return <Contacted {...props} />;
    case 'donated': return <Donated {...props} />;
    case 'group': return <Group {...props} />;
    case 'meeting': return <Meeting {...props} />;
    case 'organization': return <Organization {...props} />;
    case 'registered': return <Registered {...props} />;
    case 'volunteer': return <Volunteer {...props} />;
    case 'volunteerHours': return <VolunteerHours {...props} />;
    default: return (<p>Select a trend.</p>);
  }
};


const Snapshot = (props) => {
  const {
    data,
  } = props;

  return (
    <div className="container">
      <div className="c-panel">
        <div className="row">
          <SnapShotSelect {...props} />
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
  data: PropTypes.shape({}),
};

export default Snapshot;
