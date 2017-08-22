import React from 'react';
import { Container } from 'wolfshark';
import Accordion from '../Accordion/components/Accordion';
import terms from './constants';

const styles = {
  active: {
    display: 'inherit',
  },
  inactive: {
    display: 'none',
  },
};

const TermsConditions = () => (
  <Container>
    <h1 className="o-heading-main">Terms and Conditions of Use of the Health Index</h1>
    <div className="o-layout">

      {terms.map(term => (

        <div className="c-panel" key={term.id}>
          <Accordion>

            {(active, toggle) => (

              <div>

                <a
                  className="o-heading-link o-layout__item u-2/3 u-pt u-pl0"
                  href="#toggle"
                  onClick={(e) => {
                    e.preventDefault();
                    toggle();
                  }}
                >
                  {term.title}
                </a>

                <button
                  className="c-button o-layout__item u-1/3 o-layout__item u-1/3"
                  onClick={() => toggle()}
                  type="button"
                >
                  {active
                    ? 'Hide'
                    : 'Show'
                  }
                </button>


                <div
                  className="c-panel__content o-layout__item"
                  style={active ? styles.active : styles.inactive}
                >
                  {term.text}
                </div>

              </div>
            )}
          </Accordion>
        </div>
      ))}
    </div>
  </Container>
);

export default TermsConditions;
