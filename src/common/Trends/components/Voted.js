import React from 'react';

import { DonutGraph } from '../../Graphs';

const Voted = (props) => {
  const {
    filter: {
      voted_percent,
      voted_rank,
    },
  } = props;

  return (
    <div>
      <h3>{props.state}</h3>
      <DonutGraph percent={voted_percent}  />

      <ul>
        <li>Percent: {voted_percent}</li>

        {voted_rank
          ? <li>Rank: {voted_rank}</li>
          : null
        }
      </ul>
    </div>
  );
}

export default Voted;
