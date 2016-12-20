import React from 'react';

const Reports = () => {
  return (
    <div>
      <object
        data="./../data/pdf/health_civics_08.pdf"
        type="application/pdf"
        width="300" height="200"
      >
        <a href="../data/pdf/health_civics_08.pdf">
          PDF
        </a>
      </object>
      {/* <iframe src="./../data/pdf/health_civics_08.pdf" width="55%" height="300px" type="application/pdf"></iframe> */}
    </div>
  );
};

export default Reports;
