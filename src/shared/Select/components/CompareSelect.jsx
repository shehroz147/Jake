import React, { PropTypes } from 'react';

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
        <div className="o-layout__item">
          <h1 className="o-heading-section">
            Year Select
          </h1>
          <ChangeYearButton changeYear={changeYear} year={year} />
        </div>
        <div className="o-layout__item">
          <h1 className="o-heading-section">
            Trend Select
          </h1>
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
