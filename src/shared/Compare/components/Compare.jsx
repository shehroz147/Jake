import React from 'react';
import { Container } from 'wolfshark';
import Trend from '../../Trend/components/Trend';

const Compare = props => (
  <Container>
    <h1 className="o-heading-main u-m0">Compare Civic Health</h1>
    <p className="u-text--">
      Use the Selects and Buttons below to compare states to the national average
      based off our specific civic trends
    </p>
    <Trend {...props} />
  </Container>
);

export default Compare;
