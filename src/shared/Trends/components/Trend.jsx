import React, { PropTypes } from 'react';

import TrendSelect from '../../Select/components/Trend';

// Trends
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Boycotted from './Boycotted';
import Community from './Community';
import Contacted from './Contacted';
import Donated from './Donated';
import Group from './Group';
import Meeting from './Meeting';
import Organization from './Organization';
import Registered from './Registered';
import Volunteer from './Volunteer';
import VolunteerHours from './VolunteerHours';
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
      <div className="c-panel__head">
        <h1 className="o-heading-sub"> <TrendSelect {...props} /> </h1>
      </div>
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
