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
    <div className={classes['donut-chart']}>
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
      </svg>

      <div className={classes.percent}>
        {`${percent}%`}
      </div>
    </div>
  );
};

const styles = {
  'donut-chart': {
    position: 'relative',
  },

  percent: {
    fontSize: '40px',
    fontWeight: '600',
    left: '50%',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}

export default injectSheet(styles)(DonutGraph);
