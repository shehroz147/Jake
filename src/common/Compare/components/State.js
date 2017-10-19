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
  Section,
  Select,
} from 'react-mako';

import Navigation from '../../Navigation';
import * as CompareConstants from '../constants';

const styles = {
  container: {
    position: 'relative',

    '&:after': {
      border: `1px solid rgba(255, 255, 255, 0.64)`,
      borderLeft: 0,
      borderTop: 0,
      content: '""',
      display: 'block',
      height: '.5em',
      position: 'absolute',
      pointerEvents: 'none',
      right: '1.25em',
      top: '1.25em',
      transform: 'rotate(45deg)',
      width: '.5em',
    },

    '&:hover:after': {
      borderColor: 'white',
    },
  },

  select: {
    appearance: 'none',
    backgroundColor: 'transparent',
    border: `1px solid rgba(255, 255, 255, 0.64)`,
    borderRadius: '.125rem',
    color: 'white',
    font: 'inherit',
    margin: 0,
    padding: '.75rem 2.5rem .75rem 1rem',
    width: '100%',

    '&:focus': {
      outline: 'none',
    },

    '&:hover': {
      borderColor: 'white',
    },

    '& option': {
      color: 'black',
      font: 'inherit',
    },

    fallbacks: {
      '-moz-appearance': 'none',
      '-webkit-appearance': 'none',
    },
  },
};

const StateSelect = (props) => {
  const {
    classes,
    primary,
    secondary,
    selectPrimary,
    selectSecondary,
    selectType,
    type,
  } = props;

  const nextType = type === 'state' ? 'metro' : 'state';

  return (
    <Hero color="primary">
      <HeroHeader>
        <Navigation />
      </HeroHeader>
      <HeroBody>
        <Container size="small">
          <Heading style={{ textAlign: 'center' }}>Compare States</Heading>
          <Heading type="sub-title" style={{ textAlign: 'center' }}>Pick two states to compare civic health data.</Heading>

          <Columns>
            <Column>
              <div className={classes.container}>
                <select className={classes.select} onChange={selectPrimary} value={primary}>
                  <option disabled selected>Select State</option>
                  {CompareConstants.states.map((state, key) => <option key={key} value={state}>{state}</option>)}
                </select>
              </div>
            </Column>
            <Column>
              <div className={classes.container}>
                <select className={classes.select} onChange={selectSecondary} value={secondary}>
                  <option disabled selected>Select State</option>
                  {CompareConstants.states.map((state, key) => <option key={key} value={state}>{state}</option>)}
                </select>
              </div>
            </Column>
          </Columns>
        </Container>
      </HeroBody>
      <HeroFooter>
        <Container>
          <p style={{ textAlign: 'center' }}>
            {'Looking to compare MSA data? '}
            <a
              href="#switch-to-msa"
              onClick={(event) => {
                event.preventDefault();
                selectType(nextType);
              }}
            >
              Switch to MSA mode!
            </a>
          </p>
        </Container>
      </HeroFooter>
    </Hero>
  );
}

export default injectSheet(styles)(StateSelect);
