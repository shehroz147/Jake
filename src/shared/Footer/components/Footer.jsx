import React from 'react';
import Link from 'react-router/lib/Link';
import { Container } from 'wolfshark';

import PartnersFooter from './PartnersFooter';

const Footer = () => (
  <footer className="c-footer">
    <Container>
      <div className="o-layout u-text-center">
        <div className="o-layout__item u-1/3">
          <h3 className="o-heading-section u-text--inverse">Additional Links</h3>
          <ul className="c-footer-links">
            <li>Archive Reports</li>
            <li><Link className="c-nav__link u-m0" to="privacy">Privacy Policy</Link></li>
            <li>Post a Comment</li>
          </ul>
        </div>
        <div className="o-layout__item u-1/3">
          <h3 className="o-heading-section u-text--inverse">Contact Us</h3>
          <ul className="c-footer-links">
            <li>Lou Frey Institute</li>
            <li>12443 Research Parkway</li>
            <li>OTC3 Suite 406</li>
            <li>Orlando FL,32826</li>
            <li>(407) 823-4018</li>
          </ul>
        </div>
        <div className="o-layout__item u-1/3">
          <h3 className="o-heading-section u-text--inverse">University of Central Florida</h3>
          <ul className="c-footer-links">
            <li>College of Sciences</li>
            <li>Department of Political Science</li>
          </ul>
        </div>
      </div>
      <PartnersFooter />
    </Container>
  </footer>
);

export default Footer;
