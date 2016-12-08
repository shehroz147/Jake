import React, { PropTypes } from 'react';

import data from `'./../data/json/{props.year}.json'`;

import Graph from './Graph';
import YearSelect from './YearSelect'

const Trend props = (

  const obj = data[props.state];
  <div>
    <div>
      <div className="c-panel">
        <div className="c-panel__head">
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
