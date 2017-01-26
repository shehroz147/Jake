import React, { PropTypes } from 'react';

// Trends
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Boycotted from '../components/Boycotted';
import Community from '../components/Community';
import Contacted from '../components/Contacted';
import Donated from '../components/Donated';
import Group from '../components/Group';
import Meeting from '../components/Meeting';
import Organization from '../components/Organization';
import Registered from '../components/Registered';
import Volunteer from '../components/Volunteer';
import VolunteerHours from '../components/VolunteerHours';
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

const Trend = (props) => {
  return (
    <div className="container">
      <div className="c-panel">
        <div className="c-panel__content">
          {getTrendComponent(props)}
        </div>
      </div>
    </div>
  );
};

Trend.propTypes = {};

export default Trend;
