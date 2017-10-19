import React from 'react';
import {
  Card,
  CardCaption,
  CardFigure,
  Column,
  Columns,
  Container,
  Figure,
  Heading,
  Hero,
  HeroBody,
  HeroHeader,
  Section,
} from 'react-mako';

import Navigation from '../../Navigation';
import reports from '../data/reports';

const byYear = (a, b) => (a.date.getTime() < b.date.getTime());

const Reports = () => [
  <Hero color="tertiary" key="reports-hero">
    <HeroHeader>
      <Navigation />
    </HeroHeader>
    <HeroBody size="large">
      <Container>
        <Heading>Reports</Heading>
        <Heading type="sub-title">Florida's Civic Health</Heading>
      </Container>
    </HeroBody>
  </Hero>,
  <Section key="reports">
    <Container>
      <Columns wrap>
        {reports.sort(byYear).map(report => (
          <Column key={report._id} width="one-third-tablet-portrait">
            <Card>
              <CardFigure>
                <a href={report.file} rel="noopener noreferrer" target="_blank">
                  <Figure aspect="standard">
                    <img alt={report.title} src={report.thumbnail} />
                  </Figure>
                </a>
              </CardFigure>
              <CardCaption border>
                <Heading type="sub-section">
                  <a href={report.file} rel="noopener noreferrer" target="_blank">
                    {report.title}
                  </a>
                </Heading>
                <p>{report.description}</p>
                <Columns>
                  <Column>
                    <p style={{ color: 'rgba(0, 0, 0, 0.64)', fontSize: '.875rem' }}>
                      {report.date.getFullYear()}
                    </p>
                  </Column>
                  <Column>
                    <p style={{ color: 'rgba(0, 0, 0, 0.64)', fontSize: '.875rem', textAlign: 'right' }}>
                      <a href={report.file} rel="noopener noreferrer" target="_blank">Download</a>
                    </p>
                  </Column>
                </Columns>
              </CardCaption>
            </Card>
          </Column>
        ))}
      </Columns>
    </Container>
  </Section>
];

export default Reports;
