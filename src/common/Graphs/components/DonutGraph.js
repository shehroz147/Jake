import React from 'react';
import injectSheet from 'react-jss';

const formatStrokeDashArray = (percent) => ([
  percent,
  (100 - percent),
]);

const DonutGraph = (props) => {
  const {
    classes,
    percent,
  } = props;

  return (
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
          strokeDasharray={formatStrokeDashArray(percent)}
          strokeDashoffset="25"
        />

        <g className={classes.text}>
          <text x="50%" y="50%" className="chart-number">
            {`${percent}%`}
          </text>
        </g>
      </svg>
    </div>
  );
};

const styles = {
  text: {
    fontSize: "0.4em",
    lineHeight: "1",
    textAnchor: "middle",
    transform: "translateY(-0.25em)",
  }
}

export default injectSheet(styles)(DonutGraph);
