import React, { PropTypes } from 'react';

// Selects
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Trend from './Trend';
import State from './State';
import Year from './Year';
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const CompareSelect = (props) => {
  const {
    changeCompare,
    changeState,
    changeTrend,
    changeYear,
    compare,
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
          <State className="" changeState={changeCompare} state={compare} />
          <Year className="" changeYear={changeYear} year={year} />
        </div>
      </div>
    </div>
  );
};

CompareSelect.propTypes = {
  changeCompare: PropTypes.func,
  changeState: PropTypes.func,
  changeTrend: PropTypes.func,
  changeYear: PropTypes.func,
  compare: PropTypes.string,
  state: PropTypes.string,
  trend: PropTypes.string,
  year: PropTypes.string,
};

export default CompareSelect;
