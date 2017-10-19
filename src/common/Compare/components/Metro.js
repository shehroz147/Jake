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

const styles = {
  active: {
    cursor: 'default !important',
    opacity: '0.5',
    textDecoration: 'none !important',
  },

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

    fallbacks: {
      '-moz-appearance': 'none',
      '-webkit-appearance': 'none',
    },
  },
};

const Metro = (props) => {
  const {
    classes,
    metros,
    primary,
    secondary,
    selectPrimary,
    selectSecondary,
    selectSize,
    selectType,
    size,
    type,
  } = props;

  const nextType = type === 'state' ? 'metro' : 'state';

  return (
    <Hero color="secondary">
      <HeroHeader>
        <Navigation />
      </HeroHeader>
      <HeroBody>
        <Container size="small">
          <Heading style={{ textAlign: 'center' }}>Compare Metro</Heading>
          <Columns>
            <Column>
              <div className={classes.container}>
                <select className={classes.select} onChange={selectPrimary} value={primary}>
                  {metros.map((metro, key) => <option key={key} value={metro}>{metro}</option>)}
                </select>
              </div>
            </Column>
            <Column>
              <div className={classes.container}>
                <select className={classes.select} onChange={selectSecondary} value={secondary}>
                  {metros.map((metro, key) => <option key={key} value={metro}>{metro}</option>)}
                </select>
              </div>
            </Column>
          </Columns>

          <p>
            <strong>Filter MSA size:</strong>
            {' '}
            <a
              className={size === "3" ? classes.active : null}
              href="#filter-msa-large"
              onClick={(event) => {
                event.preventDefault();
                selectSize("3");
              }}
            >
              Large
            </a>
            {' '}
            <a
              className={size === "2" ? classes.active : null}
              href="#filter-msa-medium"
              onClick={(event) => {
                event.preventDefault();
                selectSize("2");
              }}
            >
              Medium
            </a>
            {' '}
            <a
              className={size === "1" ? classes.active : null}
              href="#filter-msa-small"
              onClick={(event) => {
                event.preventDefault();
                selectSize("1");
              }}
            >
              Small
            </a>
          </p>

        </Container>
      </HeroBody>
      <HeroFooter>
        <p style={{ textAlign: 'center' }}>
          {'Looking to compare state data? '}
          <a
            href="#switch-to-msa"
            onClick={(event) => {
              event.preventDefault();
              selectType(nextType);
            }}
            >
              Switch to state mode!
            </a>
          </p>
      </HeroFooter>
    </Hero>
  );
};

export default injectSheet(styles)(Metro);
