import React, { PropTypes } from 'react';

import data from './../data/json/2008.json';

import Graph from './Graph';
import TrendSelect from './TrendSelect';
import StateSelect from './StateSelect';
import YearSelect from './YearSelect';

const Trend = (props) => {
  const obj = data[props.state];

  return (
    <div>
      <div>
        <div className="c-panel">
          <div className="c-panel__head">
            <TrendSelect changeTrend={props.changeTrend} trend={props.trend} />
            <StateSelect changeState={props.changeState} state={props.state} />
            <YearSelect changeYear={props.changeYear} year={props.year} />
            <h1 className="o-heading-sub">{obj.state} - {obj.year}</h1>
          </div>
          <div className="c-panel__content">
            <div className="c-panel">
              <div className="c-panel__head">
                <h2 className="c-panel__heading">Volunteered</h2>
              </div>
              <div className="c-panel__content">
                <Graph
                  percentage={obj.volunteerPercent}
                />
                <h3>Rank - {obj.volunteerRank}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Trend.propTypes = {
  changeTrend: PropTypes.func,
  changeState: PropTypes.func,
  changeYear: PropTypes.func,
  state: PropTypes.string,
  trend: PropTypes.string,
  year: PropTypes.string,
};
