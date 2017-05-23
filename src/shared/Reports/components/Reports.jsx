import React from 'react';
import { Container } from 'wolfshark';

const Reports = () => (
  <Container>

    <div className="o-layout">

      <h1 className="o-layout__item o-heading-main">Civic Health Reports</h1>

      <div className="c-panel o-layout__item">

        <div className="c-panel__head">
          <h1 className="c-panel__heading">2008 Report: Beyond the Vote</h1>
        </div>

        <a
          href="https://drive.google.com/file/d/0B_H96_GL74SIWlFJZ2l5VEVsb0k/view?usp=sharing" rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Beyond the Vote Cover"
            src="/img/reports/health_civics_08.png"
          />
          <button className="c-button c-button--block ">
            View
          </button>
        </a>
      </div>

      <div className="c-panel o-layout__item">

        <div className="c-panel__head">
          <h1 className="c-panel__heading">2009 Report: Communities and the State's Civic Destiny</h1>
        </div>

        <a
          href="https://drive.google.com/file/d/0B_H96_GL74SId1M1dU05dm5yVUk/view?usp=sharing" rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="Communities and the State's Civic Destiny"
            src="/img/reports/health_civics_09.png"
          />
          <button className="c-button c-button--block">
            View
          </button>
        </a>

      </div>

      <div className="c-panel o-layout__item">

        <div className="c-panel__head">
          <h1 className="c-panel__heading">2010 Report: A Tale of Two Cities</h1>
        </div>

        <a
          href="https://drive.google.com/file/d/0B_H96_GL74SIT1R0U3Q2YnNzVzA/view?usp=sharing" rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="A Tale of Two Citites"
            src="/img/reports/health_civics_10.png"
          />
          <button className="c-button c-button--block ">
            View
          </button>
        </a>

      </div>

      <div className="c-panel o-layout__item">

        <div className="c-panel__head">
          <h1 className="c-panel__heading">2011 Report: The Next Generation</h1>
        </div>

        <a
          href="https://drive.google.com/file/d/0B_H96_GL74SIdjFiUUJ0TktKbm8/view?usp=sharing" rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="The Next Generation"
            src="/img/reports/health_civics_11.png"
          />
          <button className="c-button c-button--block">
            View
          </button>
        </a>

      </div>
    </div>
  </Container>
);

export default Reports;
