import Link from 'react-router/lib/link';
import React from 'react';

const Footer = () => (
  <footer className="c-footer" >
    <div className="o-wrapper" >
      <div className="o-layout o-layour--middle">
        <div className="o-layout__item u-1/2@lap-and-up" >
          <h2 className="" >Additional Links</h2>
          <ul className="o-list-bare u-text--" >
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          {/* <Link />
          <Link />
          <Link /> */}
        </div>

        <div className="o-layout__item u-1/2@lap-and-up">
          <div className="" >
            <h2>Contact Us</h2>
            <ul className="o-list-bare u-text--">
              <li>Lou Frey Institute</li>
              <li>12443 Research Parkway</li>
              <li>OTC3 Suite 406</li>
              <li>Orlando FL,32826</li>
              <li>(407) 823-4018</li>
            </ul>
          </div>

          <div className="o-layout__item u-1/2@lap-and-up" >
            <h2 className="" >
              {/* <Link /> */}
              University of Central Florida
              College of Sciences
              Department of Political Science
            </h2>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
