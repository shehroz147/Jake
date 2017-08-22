import React from 'react';
import PropTypes from 'prop-types';

const StaticTrendSelect = props => (
  <div>

    <button
      className=""
      onClick={(event) => {
        const trend = event.target.value;
        props.changeTrend(trend);
      }}
      value="volunteer"
    >
      Volunteered
    </button>

    <button
      className=""
      onClick={(event) => {
        const trend = event.target.value;
        props.changeTrend(trend);
      }}
      value="volunteerHours"
    >
      Volunteer Hours per Capita
    </button>

    <button
      className=""
      onClick={(event) => {
        const trend = event.target.value;
        props.changeTrend(trend);
      }}
      value="meeting"
    >
      Attended a Public Meeting
    </button>

    <button
      className=""
      onClick={(event) => {
        const trend = event.target.value;
        props.changeTrend(trend);
      }}
      value="community"
    >
      Worked with Neighbors to Fix Community Problem
    </button>

    <button
      className=""
      onClick={(event) => {
        const trend = event.target.value;
        props.changeTrend(trend);
      }}
      value="donated"
    >
      Donated Money to a Charity
    </button>

    <button
      className=""
      onClick={(event) => {
        const trend = event.target.value;
        props.changeTrend(trend);
      }}
      value="boycotted"
    >
      Bought or boycotted a product
    </button>

    <button
      className=""
      onClick={(event) => {
        const trend = event.target.value;
        props.changeTrend(trend);
      }}
      value="registered"
    >
      Registered to Vote
    </button>

    <button
      className=""
      onClick={(event) => {
        const trend = event.target.value;
        props.changeTrend(trend);
      }}
      value="contacted"
    >
      Contacted or Visited a Public Official
    </button>

    <button
      className=""
      onClick={(event) => {
        const trend = event.target.value;
        props.changeTrend(trend);
      }}
      value="group"
    >
      Belongs to a Community Group
    </button>

    <button
      className=""
      onClick={(event) => {
        const trend = event.target.value;
        props.changeTrend(trend);
      }}
      value="organization"
    >
        Belongs to a Civic Organization
    </button>
  </div>
);

StaticTrendSelect.propTypes = {
  changeTrend: PropTypes.func.isRequired,
  trend: PropTypes.string.isRequired,
};

export default StaticTrendSelect;
