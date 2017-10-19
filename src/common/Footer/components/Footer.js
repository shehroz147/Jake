import React from 'react';
import {
  Column,
  Columns,
  Container,
  Section,
} from 'react-mako';

const Footer = () => (
  <Section color="light">
    <Container>
      <Columns wrap  style={{ alignItems: 'center' }}>
        <Column width="half-tablet-portrait">
          <p>
            &copy;{' '}
            <a href="http://loufreyinstitute.org" rel="noopener noreferrer" target="_blank">
              Lou Frey Institute
            </a>
            , 2017
          </p>
        </Column>
        <Column width="half-tablet-portrait">
          <Columns style={{ alignItems: 'center' }}>
            <Column>
              <a href="http://loufreyinstitute.org" rel="noopener noreferrer" target="_blank" title="Lou Frey Institute">
                <img alt="Lou Frey Institute Logo" src="/images/lou-frey-institute.png" />
              </a>
            </Column>
            <Column>
              <a href="http://floridacitizen.org" rel="noopener noreferrer" target="_blank" title="Florida Joint Center for Citizenship">
                <img alt="Florida Joint Center for Citizenship Logo" src="/images/florida-joint-center-citizenship.png" width="128" />
              </a>
            </Column>
            <Column>
              <a href="https://www.ncoc.org/" rel="noopener noreferrer" target="_blank" title="National Conference on Citizenship">
                <img alt="National Conference on Citizenship Logo" src="/images/national-conference-citizenship.png" />
              </a>
            </Column>
            <Column>
              <a href="http://www.bobgrahamcenter.ufl.edu/" rel="noopener noreferrer" target="_blank" title="Bob Graham Center for Public Service">
                <img alt="Bob Graham Center for Public Service Logo" src="/images/bob-graham-center-public-service.png" />
              </a>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </Container>
  </Section>
);

export default Footer;
