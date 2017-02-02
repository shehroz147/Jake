import React, { PropTypes } from 'react';

// Selects
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import TrendSelect from './TrendSelect';
import StateSelect from './StateSelect';
import YearSelect from './YearSelect';
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const CompareSelect = (props) => {
  const {
    changeState1,
    changeState2,
    changeTrend,
    changeYear,
    state1,
    state2,
    trend,
    year,
  } = props;

  return (
    <div className="">

      <div className="c-select-panel">

        <div className="o-layout">

          <div className="o-layout__item">
            <label htmlFor="trendSelect">
              Trend Select
              <TrendSelect className="" changeTrend={changeTrend} trend={trend} />
            </label>
          </div>

          <div className="o-layout__item">
            <label htmlFor="yearSelect">
              Year Select
              <YearSelect className="" changeYear={changeYear} year={year} />
            </label>
          </div>

          <div className="o-layout__item u-1/2">
            <label htmlFor="state1Select">
              State One Select
              <StateSelect className="" changeState={changeState1} state={state1} />
            </label>
          </div>

          <div className="o-layout__item u-1/2">
            <label htmlFor="state2Select">
              State Two Select
              <StateSelect className="" changeState={changeState2} state={state2} />
            </label>
          </div>

        </div>

      </div>

    </div>
  );
};

CompareSelect.propTypes = {
  changeState1: PropTypes.func.isRequired,
  changeState2: PropTypes.func.isRequired,
  changeTrend: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
  state1: PropTypes.shape({}).isRequired,
  state2: PropTypes.shape({}).isRequired,
  trend: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default CompareSelect;
