import React from 'react';
import { Container } from 'wolfshark';
import Trend from '../../Trend/components/Trend';

const Compare = props => (
  <Container>
    <div className="o-heading-main u-mb0">Compare Civic Health</div>
    <Trend {...props} />
  </Container>
);

export default Compare;
