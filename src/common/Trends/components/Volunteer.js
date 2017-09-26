import React from 'react';

const Volunteer = (props) => {
  const {} = props;

  if (props.filter.volunteerRank === 0 || "") {
    return (
      <div>
        <h3>{props.state} Data</h3>
        <ul>
          <li>Percent: {props.filter.volunteerPercent}</li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h3>{props.state} Data</h3>
      <ul>
        <li>Percent: {props.filter.volunteerPercent}</li>
        <li>Rank: {props.filter.volunteerRank}</li>
      </ul>
    </div>
  );
}

export default Volunteer;
