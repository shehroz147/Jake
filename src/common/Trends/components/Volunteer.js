import React from 'react';
import injectSheet from 'react-jss';

const Volunteer = (props) => {
  const {
    classes
  } = props;
  const percent = props.filter.volunteer_percent;
  const math = 100 - props.filter.volunteer_percent;
  const value = [
    percent,
    math,
  ];

  return (
    <div>
      <h3>{props.state}</h3>
      <div>
        <svg
          width="125px"
          height="125px"
          viewBox="0 0 42 42"
          className="donut"
          aria-labelledby=""
          role="img"
        >

          <circle
            className="donut-ring"
            cx="21" cy="21" r="15.91549430918954"
            fill="transparent"
            stroke="#f7f7f7"
            strokeWidth="3"
            role="presentation"
          />

          <circle
            className="donut-segment"
            cx="21" cy="21" r="15.91549430918954"
            fill="transparent"
            stroke="#c0ffee"
            strokeWidth="3"
            strokeDasharray={value}
            strokeDashoffset="25"
          />

          <g className={classes.text}>
            <text x="50%" y="50%" className="chart-number">
              {props.filter.volunteer_percent}%
            </text>
          </g>
        </svg>
      </div>

      <ul>
        <li>Percent: {props.filter.volunteer_percent}</li>
        <li>Rank: {props.filter.volunteer_rank}</li>
      </ul>

    </div>
  );

  if (props.filter.volunteer_rank === 0 || "") {
    return (
      <div>
        <h3>{props.state}</h3>
        <ul>
          <li>Percent: {props.filter.volunteer_percent}</li>
        </ul>
      </div>
    )
  }
}

const styles = {
  text: {
    fontSize: "0.4em",
    lineHeight: "1",
    textAnchor: "middle",
    transform: "translateY(-0.25em)",
  }
}

export default injectSheet(styles)(Volunteer);
