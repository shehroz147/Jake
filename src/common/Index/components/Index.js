import injectSheet from 'react-jss';
import Link from 'react-router/lib/Link';
import React from 'react';
import {
  Column,
  Columns,
  Container,
  Heading,
  Hero,
  HeroBody,
  HeroFooter,
  HeroHeader,
  Media,
  MediaBody,
  MediaFigure,
  Section,
} from 'react-mako';

import Navigation from '../../Navigation';

const styles = {
  list: {
    listStyle: 'none',

    '&:not(:last-child)': {
      marginBottom: '1.5rem',
    },
  },

  highlight: {
    border: '1px solid gainsboro',
    borderRadius: '.125rem',
    fontSize: '.875rem',
    padding: '.75em 1em',

    '&:not(:last-child)': {
      marginBottom: '.75rem',
    },
  },

  population: {
    color: 'rgba(0, 0, 0, 0.48)',
    fontSize: '1rem',
    fontWeight: 'lighter',
    margin: '0 0 1.5rem',
  },

  rank: {
    backgroundColor: 'mediumturquoise',
    borderRadius: '3rem',
    color: 'white',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    lineHeight: '3rem',
    height: '3rem',
    textAlign: 'center',
    width: '3rem',
  },
};

const Index = (props) => {
  const {
    classes,
  } = props;

  return [
    <Hero color="primary" key="civic-health">
      <HeroHeader>
        <Navigation />
      </HeroHeader>
      <HeroBody size="large" style={{ color: 'rgba(0, 0, 0, 0.64)' }}>
        <Container>
          <Columns wrap>
            <Column width="one-third-tablet-portrait" style={{ textAlign: 'center' }}>
              <img alt="Florida Civic Health Logo" src="/images/florida-civic-health.png" width="192px" />
            </Column>
            <Column width="two-thirds-tablet-portrait">
              <Heading style={{ fontWeight: '400' }}>Civic Health in Florida</Heading>
              <p>Participation in civic life is at the heart of democratic governance and vibrant, healthy communities.  This site is your tool to monitor civic participation in Florida and its communities. To help you better understand Florida, the site allows you to compare Florida and Florida's cities to other states and cities across the nation. Our goal is to support your efforts to improve Florida's civic health.</p>
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>,
    <Section key="chart" style={{ backgroundColor: '#fafafa' }}>
      <Container style={{ textAlign: 'center' }}>
        <Heading>Florida's Civic Health Compared to the National Average</Heading>
        <Heading type="sub-title">2015-2016</Heading>
        <img alt="Florida's Civic Health Compared to the National Average Chart" src="/images/civic-health-chart.png" />
      </Container>
    </Section>,
    <Section key="measuring">
      <Container size="large">
        <Heading style={{ textAlign: 'center' }}>Measuring Civic Health</Heading>
        <Columns wrap style={{ alignItems: 'center' }}>
          <Column width="one-third-tablet-landscape" style={{ textAlign: 'center' }}>
            <img alt="Clipboard" src="/images/clip.png" />
          </Column>
          <Column width="two-thirds-tablet-landscape">
            <Heading type="section" style={{ marginBottom: '.75rem' }}>Current Population Survey</Heading>
            <p>Data provided on this site are from the Current Population Survey (CPS), a monthly survey of about 60,000 households conducted by the U.S. Census Bureau. The CPS annually administers three supplement surveys related to civic engagement and civic health; the Voting Supplement, Volunteering Supplement, and Civic Engagement Supplement. The supplements gather data on the civic activities of individuals age 18 and over and on the volunteering activities of individuals age 16 and older.</p>
          </Column>
        </Columns>
        <Columns wrap style={{ alignItems: 'center' }}>
          <Column width="two-thirds-tablet-landscape" style={{ textAlign: 'right' }}>
            <Heading type="section" style={{ marginBottom: '.75rem' }}>What Do We Measure?</Heading>
            <p>Civic activities reported here include membership in civic organizations, donating to charitable organizations, boycotting or buying a product for social/political reasons, attending public meetings, contacting public officials, working with neighbors to fix a community problem and volunteering. Data from the Voting Supplement shows the percentage of individuals who voted in the last election and the percentage of individuals who did not vote, but were registered to vote.</p>
            <p>You can click on the <Link to="/compare">Compare</Link> page to see how Florida measures up against other states on each civic health indicator and how Florida MSAs compare to the rest of the nation.</p>
          </Column>
          <Column width="one-third-tablet-landscape" style={{ textAlign: 'center' }}>
            <img alt="Graphs" src="/images/graph.png" />
          </Column>
        </Columns>
      </Container>
    </Section>,
    <Section key="Highlights" style={{ borderTop: '1px solid whitesmoke' }}>
      <Container size="large">
        <Heading style={{ textAlign: 'center' }}>Florida MSA Trends and Highlights</Heading>

        <Columns wrap>
          <Column width="one-third-tablet-landscape">
            <Heading type="section" style={{ margin: 0 }}>Small Metro Areas</Heading>
            <h3 className={classes.population}>Population &lt; 250,000</h3>
            <ul className={classes.list}>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank}>3</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Gainesville, FL<sup>*</sup></strong><br />
                    Contacted or Visited a Public Official (26.8%)
                  </MediaBody>
                </Media>
              </li>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank}>3</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Punta Gorda, FL</strong><br />
                    Membership in a Community Organization (29.8%)
                  </MediaBody>
                </Media>
              </li>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank}>20</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Panama City-Lynn Haven, FL</strong><br />
                    Attended a Public Meeting (12.3%)
                  </MediaBody>
                </Media>
              </li>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank}>15</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Panama City-Lynn haven, FL</strong><br />
                    Worked with Neighbors to Fix a Community Problem (14%)
                  </MediaBody>
                </Media>
              </li>
            </ul>
          </Column>
          <Column width="one-third-tablet-landscape">
            <Heading type="section" style={{ margin: 0 }}>Medium Metro Areas</Heading>
            <h3 className={classes.population}>Population 250,000-999,999</h3>
            <ul className={classes.list}>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank} style={{ backgroundColor: 'lightcoral' }}>18</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Pensacola-Ferry Pass-Brent, FL</strong><br />
                    Contacted or Visited a Public Official (17%)
                  </MediaBody>
                </Media>
              </li>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank} style={{ backgroundColor: 'lightcoral' }}>6</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Tallahassee,FL</strong><br />
                    Bought or Boycotted a Product for Social or Political Reasons (32.4%)
                  </MediaBody>
                </Media>
              </li>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank} style={{ backgroundColor: 'lightcoral' }}>2</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Tallahassee,FL</strong><br />
                    Membership in a Civic Organization (25%)
                  </MediaBody>
                </Media>
              </li>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank} style={{ backgroundColor: 'lightcoral' }}>6</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Tallahassee,FL</strong><br />
                    Attended a Public Meeting (17%)
                  </MediaBody>
                </Media>
              </li>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank} style={{ backgroundColor: 'lightcoral' }}>15</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Port St. Lucie-Fort Pierce, FL</strong><br />
                    Attended a Public Meeting (12.9%)
                  </MediaBody>
                </Media>
              </li>
            </ul>
          </Column>
          <Column width="one-third-tablet-landscape">
            <Heading type="section" style={{ margin: 0 }}>Large Metro Areas</Heading>
            <h3 className={classes.population}>Population 1,000,000 or more</h3>
            <ul className={classes.list}>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank} style={{ backgroundColor: 'steelblue' }}>5</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Jacksonville, FL</strong><br />
                    Membership in Civic Organization (11.1%)
                  </MediaBody>
                </Media>
              </li>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank} style={{ backgroundColor: 'steelblue' }}>18</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Orlando-Kissimmee</strong><br />
                    Contacted or Visited a Public Official (11.5%)
                  </MediaBody>
                </Media>
              </li>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank} style={{ backgroundColor: 'steelblue' }}>28</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Jacksonville, FL</strong><br />
                    Volunteering (23.7%)
                  </MediaBody>
                </Media>
              </li>
              <li className={classes.highlight}>
                <Media style={{ alignItems: 'center' }}>
                  <MediaFigure>
                    <div className={classes.rank} style={{ backgroundColor: 'steelblue' }}>16</div>
                  </MediaFigure>
                  <MediaBody>
                    <strong>Jacksonville, FL</strong><br />
                    Attended a Public Meeting (9.5%)
                  </MediaBody>
                </Media>
              </li>
            </ul>
          </Column>
        </Columns>
        <p style={{ color: 'rgba(0, 0, 0, 0.48)', textAlign: 'right' }}><small><sup>*</sup>2013 data, Gainesville, FL MSA increased in population and was therefore coded as a medium size metro area in 2015</small></p>
      </Container>
    </Section>
  ];
}

export default injectSheet(styles)(Index);
