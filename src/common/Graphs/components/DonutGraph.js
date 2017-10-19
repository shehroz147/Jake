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

  if (!percent) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 42 42"
        className="donut"
        aria-labelledby=""
        role="img"
        style={{
          maxHeight: '12rem',
          maxWidth: '12rem',
        }}
      >

        <circle
          className="donut-ring"
          cx="21" cy="21" r="15.91549430918954"
          fill="transparent"
          stroke="whitesmoke"
          strokeWidth="4"
          role="presentation"
        />

        <circle
          className="donut-segment"
          cx="21" cy="21" r="15.91549430918954"
          fill="transparent"
          stroke="mediumturquoise"
          strokeDasharray={formatStrokeDashArray(percent)}
          strokeDashoffset="25"
          strokeLinecap="round"
          strokeWidth="4"
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
    fontSize: "0.5em",
    textAnchor: "middle",
    transform: "translateY(25%)",
  }
}

export default injectSheet(styles)(DonutGraph);
