import React, { PropTypes } from 'react';

// Selects
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Trend from './Select/Trend';
import State from './Select/State';
import Year from './Select/Year';

const Compare = (props) => {
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
    <div>
      <div>
        <Trend className="col small-third" changeTrend={changeTrend} trend={trend} />
        <State className="col small-third" changeState={changeState} state={state} />
        <Year className="col small-third" changeYear={changeYear} year={year} />

        <Trend className="col small-third" changeTrend={changeTrend} trend={trend} />
        <State className="col small-third" changeState={changeState} state={state} />
        <Year className="col small-third" changeYear={changeYear} year={year} />
      </div>
    </div>
  );
};

Compare.propTypes = {
  changeTrend: PropTypes.func,
  changeState: PropTypes.func,
  changeYear: PropTypes.func,
  data: PropTypes.obj,
  state: PropTypes.string,
  trend: PropTypes.string,
  year: PropTypes.string,
};

export default Compare
