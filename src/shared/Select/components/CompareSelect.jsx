import React, { PropTypes } from 'react';

// Selects
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import TrendSelect from './TrendSelect';
import StateSelect from './StateSelect';
import YearSelect from './YearSelect';
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
    <div className="">
      <div className="c-select-panel">
        <div className="">
          <label htmlFor="trendSelect">
            Trend Select
            <TrendSelect className="" changeTrend={changeTrend} trend={trend} />
          </label>
          <label htmlFor="state1Select">
            State One Select
            <StateSelect className="" changeState={changeState} state={state} />
          </label>
          <label htmlFor="state2Select">
            State Two Select
            <StateSelect className="" changeState={changeCompare} state={compare} />
          </label>
          <label
            className=""
            htmlFor="yearSelect"
          >
            Year Select
            <YearSelect className="" changeYear={changeYear} year={year} />
          </label>
        </div>
      </div>
    </div>
  );
};

CompareSelect.propTypes = {
  changeCompare: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  changeTrend: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
  compare: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  trend: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default CompareSelect;
