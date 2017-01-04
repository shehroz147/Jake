import React, { PropTypes } from 'react';

import CompareSelect from './Select/CompareSelect';

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

import Snapshot from './Snapshot';

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

const Compare = (props) => {
  const {
    data,
  } = props;

  return (
    <div>
      <div>
        <h1>Compare</h1>
        <CompareSelect {...props} />
        <div className="c-panel__content">
          <Snapshot {...props} />
          <Snapshot {...props} />
        </div>
      </div>
    </div>
  );
};

Compare.propTypes = {
  data: PropTypes.shape({}),
};

export default Compare
