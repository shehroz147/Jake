import React from 'react';
import {
  Column,
  Columns,
  Container,
  Heading,
  Section,
} from 'react-mako';

import Year from './Year';
import { DonutGraph } from '../../Graphs';
import * as TrendConstants from '../constants';

const Trend = (props) => {
  const {
    primary,
    primaryData,
    secondary,
    secondaryData,
    selectYear,
    tertiaryData,
    trend,
    type,
    year,
    years,
  } = props;

  const width = type === 'state'
    ? 'one-third-tablet-portrait'
    : 'half-tablet-portrait';

  return (
    <Section>
      <Container>
        <Year selectYear={selectYear} year={year} years={years} />
        <Heading style={{ fontSize: '2rem', paddingBottom: '1.5rem', textAlign: 'center' }}>{TrendConstants.titles[trend]}</Heading>
        <Columns>
          <Column style={{ textAlign: 'center' }} width={width}>
            <DonutGraph percent={primaryData[`${trend}_percent`]}  />
            <Heading type="sub-section">{primary}</Heading>
            <p>Rank {primaryData[`${trend}_rank`]}</p>
          </Column>
          <Column style={{ textAlign: 'center' }} width={width}>
            <DonutGraph percent={secondaryData[`${trend}_percent`]}  />
            <Heading type="sub-section">{secondary}</Heading>
            <p>Rank {secondaryData[`${trend}_rank`]}</p>
          </Column>
          {type === 'state'
            ? (
              <Column style={{ textAlign: 'center' }} width={width}>
                <DonutGraph percent={tertiaryData[`${trend}_percent`]}  />
                <Heading type="sub-section">National Average</Heading>
              </Column>
            )
            : null
          }
        </Columns>
      </Container>
    </Section>
  );
}

export default Trend;
