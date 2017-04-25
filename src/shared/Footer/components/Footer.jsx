import React from 'react';

import PartnersFooter from './PartnersFooter';

const Footer = () => (
  <footer className="c-footer">
    <div className="o-wrapper u-pv+">
      <PartnersFooter />
      <div className="o-layout u-text-center">
        <div className="o-layout__item u-1/3">
          <h3>Additional Links</h3>
          <ul>
            <li><a href="/reports">Archive Reports</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            {/* <li><a href="#">Post a Comment</a></li> */}
          </ul>
        </div>
        <div className="o-layout__item u-1/3">
          <h3>Contact Us</h3>
          <ul>
            <li>Lou Frey Institute</li>
            <li>12443 Research Parkway</li>
            <li>OTC3 Suite 406</li>
            <li>Orlando FL,32826</li>
            <li>(407) 823-4018</li>
          </ul>
        </div>
        <div className="o-layout__item u-1/3">
          <h3>University of Central Florida</h3>
          <ul>
            <li>College of Sciences</li>
            <li>Department of Political Science</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
