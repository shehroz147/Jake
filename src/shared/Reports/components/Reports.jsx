import React from 'react';

const Reports = () => {
  return (
    <div className="o-wrapper">
      <div className="c-panel">
        <h1 className="c-panel__head">
          Beyond the Vote
        </h1>
        <div className="c-panel__content">
          <div className="o-layout o-layout__item">
            <a href="/pdf/health_civics_08.pdf" rel="noopener noreferrer" target="_blank">
              <img src="/img/health_civics_08.jpg" alt="Beyond the Vote Cover" width="auto" height="300px" />
            </a>
          </div>
          <div className="o-layout o-layout__item">
            <a href="/pdf/health_civics_08.pdf" rel="noopener noreferrer" target="_blank">
              <button className="c-button">
                View
              </button>
            </a>
            <a download href="/pdf/health_civics_08.pdf" rel="noopener noreferrer" target="_blank" >
              <button className="c-button">
                Download
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Reports;
