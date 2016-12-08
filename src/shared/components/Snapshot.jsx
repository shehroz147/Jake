import React, { PropTypes } from 'react';

import data from './../data/json/2008.json';

import Graph from './Graph';

const Snapshot = (props) => {
  console.log(props.state);
  const obj = data[props.state];

  return (
    <div>
      <div className="c-panel">
        <div className="c-panel__head">
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

          <div className="c-panel">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">Hours Volunteered per capita</h2>
            </div>
            <div className="c-panel__content">
              <Graph
                percentage={obj.volunteerHours}
              />
              <h3>Rank - {obj.volunteerHoursRank}</h3>
            </div>
          </div>

          <div className="c-panel">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">Percent Attended a Public Meeting</h2>
            </div>
            <div className="c-panel__content">
              <Graph
                percentage={obj.meetingPercent}
              />
              <h3>Rank - {obj.meetingRank}</h3>
            </div>
          </div>

          <div className="c-panel">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">Worked with Neighbors to Fix a Community Problem</h2>
            </div>
            <div className="c-panel__content">
              <Graph
                percentage={obj.communityPercent}
              />
              <h3>Rank - {obj.communityRank}</h3>
            </div>
          </div>


          <div className="c-panel">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">Donated Money to a Charity</h2>
            </div>
            <div className="c-panel__content">
              <Graph
                percentage={obj.donatedPercent}
              />
              <h3>Rank - {obj.donatedRank}</h3>
            </div>
          </div>

          <div className="c-panel">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">Bought or boycotted a product</h2>
            </div>
            <div className="c-panel__content">
              <Graph
                percentage={obj.productPercent}
              />
              <h3>Rank - {obj.productRank}</h3>
            </div>
          </div>

          <div className="c-panel">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">Bought or boycotted a product</h2>
            </div>
            <div className="c-panel__content">
              <Graph
                percentage={obj.votePercent}
              />
              <h3>Rank - {obj.voteRank}</h3>
            </div>
          </div>

          <div className="c-panel">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">Belongs to a Community Group</h2>
            </div>
            <div className="c-panel__content">
              <Graph
                percentage={obj.groupPercent}
              />
              <h3>Rank - {obj.groupRank}</h3>
            </div>
          </div>

          <div className="c-panel">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">Belongs to a Civic Organization</h2>
            </div>
            <div className="c-panel__content">
              <Graph
                percentage={obj.organizationPercent}
              />
              <h3>Rank - {obj.organizationRank}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Snapshot.propTypes = {
  state: PropTypes.string,
};

export default Snapshot;
