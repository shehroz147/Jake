import React, { PropTypes } from 'react';

// Selects
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Trend from './Trend';
import State from './State';
import Year from './Year';
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const SnapShotSelect = (props) => {

  const {
    changeState,
    changeTrend,
    changeYear,
    data,
    state,
    trend,
    year,
  } = props;

  return (
    <div className="container">
      <div className="c-panel">
        <div className="row">
          <Trend className="" changeTrend={changeTrend} trend={trend} />
          <State className="" changeState={changeState} state={state} />
          <Year className="" changeYear={changeYear} year={year} />
        </div>
      </div>
    </div>
  );
};

SnapShotSelect.propTypes = {
  changeTrend: PropTypes.func,
  changeState: PropTypes.func,
  changeYear: PropTypes.func,
  data: PropTypes.shape({
    meetingPercent: PropTypes.number.isRequired,
    meetingRank: PropTypes.number.isRequired,
  }),
  state: PropTypes.string,
  trend: PropTypes.string,
  year: PropTypes.string,
};

export default SnapShotSelect
