import React, { PropTypes } from 'react';

import data from './../data/json/2008.json';

const Snapshot = (props) => {
  // const {} = props;
  const thing = props.state;
  const obj = data[thing];

  return (
    <div>
      <h1>{obj.State} - {obj.Year}</h1>

      <h2>Volunteered</h2>
      <h3>Percent: {obj.volunteerPercent}</h3>
      <h3>Rank: {obj.volunteerRank}</h3>

      <h2>Hours Volunteered per capita</h2>
      <h3>Percent: {obj.volunteerHours}</h3>
      <h3>Rank: {obj.volunteerHoursRank}</h3>

      <h2>Percent Attended a Public Meeting</h2>
      <h3>Percent: {obj.meetingPercent}</h3>
      <h3>Rank: {obj.meetingRank}</h3>

      <h2>Worked with Neighbors to Fix a Community Problem</h2>
      <h3>Percent: {obj.communityPercent}</h3>
      <h3>Rank: {obj.communityRank}</h3>

      <h2>Donated Money to a Charity</h2>
      <h3>Percent: {obj.donatedPercent}</h3>
      <h3>Rank: {obj.donatedRank}</h3>

      <h2>Bought or boycotted a product</h2>
      <h3>Percent: {obj.votePercent}</h3>
      <h3>Rank: {obj.voteRank}</h3>

      <h2>Donated Money to a Charity</h2>
      <h3>Percent: {obj.registeredPercent}</h3>
      <h3>Rank: {obj.registeredRank}</h3>

      <h2>Contacted or Visited a Public Official</h2>
      <h3>Percent: {obj.productPercent}</h3>
      <h3>Rank: {obj.productRank}</h3>

      <h3>Belongs to a Community Group</h3>
      <h3>Percent: {obj.groupPercent}</h3>
      <h3>Rank: {obj.groupRank}</h3>

      <h3>Belongs to a Civic Organization</h3>
      <h3>Percent: {obj.organizationPercent}</h3>
      <h3>Rank: {obj.organizationRank}</h3>

    </div>
  );
};

Snapshot.propTypes = {
  state: PropTypes.string,
};

export default Snapshot;
