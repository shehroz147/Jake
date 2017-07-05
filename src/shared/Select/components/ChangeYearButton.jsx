import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'wolfshark';
import YearSelect from './YearSelect';

const years = [
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
];

const ChangeYearButton = props => (
  <div className="o-flex-layout">
    <div className="o-flex-layout__item o-flex-layout__item--shrink">
      <Button
        color="primary"
        onClick={() => {
          let index = years.indexOf(props.year) - 1;
          if (index < 0) {
            index = years.length - 1;
          }

          const prevYear = years[index];
          props.changeYear(prevYear);
        }}
      >
        &larr;
      </Button>
    </div>
    <div className="o-flex-layout__item o-flex-layout__item--grow u-text-center u-p0">
      <YearSelect {...props} />
    </div>
    <div className="o-flex-layout__item o-flex-layout__item--shrink u-p0">
      <Button
        color="primary"
        onClick={() => {
          let index = years.indexOf(props.year) + 1;
          if (index >= years.length) {
            index = 0;
          }

          const nextYear = years[index];
          props.changeYear(nextYear);
        }}
        type="button"
        value={props.year}
      >
        &rarr;
      </Button>
    </div>
  </div>
);

ChangeYearButton.propTypes = {
  changeYear: PropTypes.func.isRequired,
  year: PropTypes.string.isRequired,
};

export default ChangeYearButton;
