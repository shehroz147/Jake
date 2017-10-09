import React from 'react';

import { DonutGraph } from '../../Graphs';

const Volunteer = (props) => {
  const {
    filter: {
      volunteer_percent,
      volunteer_rank,
    },
  } = props;

  return (
    <div>
      <h3>{props.state}</h3>
      <DonutGraph percent={volunteer_percent}  />

      <ul>
        <li>Percent: {volunteer_percent}</li>

        {volunteer_rank
          ? <li>Rank: {volunteer_rank}</li>
          : null
        }
      </ul>
    </div>
  );
}

export default Volunteer;
