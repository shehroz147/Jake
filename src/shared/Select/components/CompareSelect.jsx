import React from 'react';
import PropTypes from 'prop-types';

// Selects
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import ChangeTrendButton from './ChangeTrendButton';
import ChangeYearButton from './ChangeYearButton';
// # =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const CompareSelect = (props) => {
  const {
    changeTrend,
    changeYear,
    trend,
    year,
  } = props;

  return (
    <div className="o-layout">
      <div className="c-panel">
        <div className="o-layout__item u-ph0">
          <div className="c-panel__heading">
            Year Select
          </div>
          <ChangeYearButton changeYear={changeYear} year={year} />
        </div>
        <div className="o-layout__item u-ph0">
          <div className="c-panel__heading">
            Trend Select
          </div>
          <ChangeTrendButton changeTrend={changeTrend} trend={trend} />
        </div>
      </div>
    </div>
  );
};

CompareSelect.propTypes = {
  changeTrend: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
  trend: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default CompareSelect;
