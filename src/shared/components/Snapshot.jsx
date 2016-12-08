import React, { PropTypes } from 'react';

import Graph from './Graph';
import TrendSelect from './TrendSelect';
import StateSelect from './StateSelect';
import YearSelect from './YearSelect';

const Snapshot = (props) => {
  const {
    changeState,
    changeTrend,
    changeYear,
    data,
    state,
    trend,
    year,
  } = props;

  console.log(data);

  return (
    <div>
      <div className="c-panel">
        <TrendSelect changeTrend={changeTrend} trend={trend} />
        <StateSelect changeState={changeState} state={state} />
        <YearSelect changeYear={changeYear} year={year} />
        <div className="c-panel__head">
          <h1 className="o-heading-sub">{data.state} - {data.year}</h1>
        </div>
        <div className="c-panel__content">
          
        </div>
      </div>
    </div>
  );
};

Snapshot.propTypes = {
  state: PropTypes.string,
  changeTrend: PropTypes.func,
  changeState: PropTypes.func,
  changeYear: PropTypes.func,
};

export default Snapshot;
