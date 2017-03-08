import React from 'react';

const Reports = () => (
  <div className="o-layout">
    {/* {reports.map(report => (
      <Report
        url={report.url}
        title={report.title}
        src={report.thumbnail}
      />
    ))} */}

    <div className="o-layout__item u-1/2">
      <div className="c-panel">
        <div className="c-panel__head">
          <h1 className="c-panel__heading">2008 Report</h1>
        </div>

        <div className="u-pv-">
          <a
            href="https://drive.google.com/file/d/0B_H96_GL74SIWlFJZ2l5VEVsb0k/view?usp=sharing" rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="Beyond the Vote Cover"
              src="/img/health_civics_08.png"
            />
            <button className="c-button c-button--block ">
              View
            </button>
          </a>
        </div>
      </div>
    </div>

    <div className="o-layout__item u-1/2">
      <div className="c-panel">
        <div className="c-panel__head">
          <h1 className="c-panel__heading">2009 Report</h1>
        </div>

        <div className="u-pv-">
          <a
            href="https://drive.google.com/file/d/0B_H96_GL74SId1M1dU05dm5yVUk/view?usp=sharing" rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="Communities and the State's Civic Destiny"
              src="/img/health_civics_09.png"
            />
            <button className="c-button c-button--block">
              View
            </button>
          </a>
        </div>
      </div>
    </div>

    <div className="o-layout__item u-1/2">
      <div className="c-panel">
        <div className="c-panel__head">
          <h1 className="c-panel__heading">2010 Report</h1>
        </div>

        <div className="u-pv-">
          <a
            href="https://drive.google.com/file/d/0B_H96_GL74SIT1R0U3Q2YnNzVzA/view?usp=sharing" rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="A Tale of Two Citites"
              src="/img/health_civics_10.png"
            />
            <button className="c-button c-button--block ">
              View
            </button>
          </a>
        </div>
      </div>
    </div>

    <div className="o-layout__item u-1/2">
      <div className="c-panel">
        <div className="c-panel__head">
          <h1 className="c-panel__heading">2011 Report</h1>
        </div>

        <div className="u-pv-">
          <div className="">
            <a
              href="https://drive.google.com/file/d/0B_H96_GL74SIdjFiUUJ0TktKbm8/view?usp=sharing" rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="The Next Generation"
                src="/img/health_civics_11.png"
              />
              <button className="c-button c-button--block">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Reports;
