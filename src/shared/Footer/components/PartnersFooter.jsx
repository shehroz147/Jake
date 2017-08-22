import React from 'react';

const PartnerFooter = () => (
  <div className="u-mb u-pv">
    <h1 className="o-heading-section u-text--inverse">Partners in Civic Health</h1>
    <table>
      <tbody>
        <tr>
          <td>
            <a href="http://loufreyinstitute.org/" className="u-m">
              <img src="/img/partners/lfi.png" alt="Lou Frey Institute of Politicis & Government Logo" />
            </a>
          </td>

          <td >
            <a href="http://floridacitizen.org/" className="u-m">
              <img src="/img/partners/fjcc.png" alt="The Florida Joint Center for Citizenship Logo" />
            </a>
          </td>

          <td >
            <a href="http://www.bobgrahamcenter.ufl.edu/" className="u-m">
              <img src="/img/partners/bobgc_logo.png" alt="Bob Graham Center for Public Service Logo" />
            </a>
          </td>

          <td >
            <a href="http://www.ncoc.org/" className="u-m">
              <img src="/img/partners/ncoc.png" alt="National Conference on Citizens Logo" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PartnerFooter;
