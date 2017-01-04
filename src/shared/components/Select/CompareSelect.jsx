import React, { PropTypes } from 'react';

// Selects
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Trend from './Trend';
import State from './State';
import Year from './Year';
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const CompareSelect = (props) => {

  const {
    changeState1,
    changeState2,
    changeTrend,
    changeYear,
    data,
    state1,
    state2,
    trend,
    year,
  } = props;

  return (
    <div className="container">
      <div className="c-panel">
        <div className="row">
          <Trend className="" changeTrend={changeTrend} trend={trend} />
          <State className="" changeState={changeState1} state1={state1} />
          <State className="" changeState={changeState2} state2={state2} />
          <Year className="" changeYear={changeYear} year={year} />
        </div>
      </div>
    </div>
  );
};

CompareSelect.propTypes = {
  changeState1: PropTypes.func,
  changeState2: PropTypes.func,
  changeTrend: PropTypes.func,
  changeYear: PropTypes.func,
  data: PropTypes.shape({
    meetingPercent: PropTypes.number.isRequired,
    meetingRank: PropTypes.number.isRequired,
  }),
  state1: PropTypes.string,
  state2: PropTypes.string,
  trend: PropTypes.string,
  year: PropTypes.string,
};

export default CompareSelect;
