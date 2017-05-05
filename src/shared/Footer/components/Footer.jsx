import React from 'react';

import PartnersFooter from './PartnersFooter';

const Footer = () => (
  <footer className="c-footer">
    <div className="o-wrapper u-pv+">
      <div className="o-layout u-text-center">
        <div className="o-layout__item u-1/3">
          <h3 className="o-heading-section">Additional Links</h3>
          <ul className="c-footer-links">
            <li>Archive Reports</li>
            <li>Privacy Policy</li>
            <li>Post a Comment</li>
          </ul>
        </div>
        <div className="o-layout__item u-1/3">
          <h3 className="o-heading-section">Contact Us</h3>
          <ul className="c-footer-links">
            <li>Lou Frey Institute</li>
            <li>12443 Research Parkway</li>
            <li>OTC3 Suite 406</li>
            <li>Orlando FL,32826</li>
            <li>(407) 823-4018</li>
          </ul>
        </div>
        <div className="o-layout__item u-1/3">
          <h3 className="o-heading-section">University of Central Florida</h3>
          <ul className="c-footer-links">
            <li>College of Sciences</li>
            <li>Department of Political Science</li>
          </ul>
        </div>
      </div>
      <PartnersFooter />
    </div>
  </footer>
);

export default Footer;
