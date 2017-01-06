import React, { PropTypes } from 'react';

import Graph from './Graph';

// const getNationalPercent = (props) => {
//   switch (props.trend) {
//     case 'boycotted': trend = 'boycottedPercent';
//       break;
//     case 'community': trend = 'communityPercent';
//       break;
//     case 'contacted': trend = 'contactedPercent';
//       break;
//     case 'donated': trend = 'donatedPercent';
//       break;
//     case 'group': trend = 'groupPercent';
//       break;
//     case 'meeting': trend = 'meetingPercent';
//       break;
//     case 'organization': trend = 'organizationPercent';
//       break;
//     case 'registered': trend = 'registeredPercent';
//       break;
//     case 'volunteer': trend = 'volunteerPercent';
//       break;
//     case 'volunteerHours': trend = 'volunteerHoursPercent';
//       break;
//     default: return (<p>Select a trend.</p>);
//   }
// };

const Nation = (props) => {
  const { data } = props;

  if (!data) {
    return <p>No Data</p>;
  }

  return (
    <div className="c-panel">
      <div className="c-panel__head">
        <h2 className="c-panel__heading">{data.state}</h2>
      </div>
      <div className="c-panel__content">
        <Graph
          percentage={data.trend}
        />

      </div>
    </div>
  );
};

Nation.propTypes = {
  data: PropTypes.shape({}),
};

export default Nation;
