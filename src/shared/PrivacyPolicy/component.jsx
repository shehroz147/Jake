import React from 'react';
import { Container } from 'wolfshark';
import Accordion from '../Accordion/components/Accordion';
import policies from './constants';

const styles = {
  active: {
    display: 'inherit',
  },
  inactive: {
    display: 'none',
  },
};

const PrivacyPolicy = () => (
  <Container>
    <h1 className="o-heading-main">Privacy Policy</h1>

    <div className="o-layout">

      {policies.map(policy => (

        <div className="c-panel" key={policy.id}>

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
                  {policy.title}
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
                  {policy.text}
                </div>

              </div>
            )}
          </Accordion>
        </div>
      ))}
    </div>
  </Container>
);

export default PrivacyPolicy;
