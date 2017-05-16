import React from 'react';
import Link from 'react-router/lib/Link';

import Accordion from '../../Accordion/components/Accordion';

const styles = {
  active: {
    display: 'inherit',
  },
  inactive: {
    display: 'none',
  },
};


const PrivacyPolicy = () => (
  <div className="o-wrapper">
    <h1 className="o-heading-main">Privacy Policy</h1>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>

            <a
              className="o-heading-link"
              href="#toggle"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              What information do we collect?
            </a>

            <p style={active ? styles.active : styles.inactive}>
              We collect geo location information for visitors navigating the site.
              When registering on our site, as appropriate, you may be asked to enter your: name or e-mail address.
              Google, as a third party vendor, uses cookies to serve ads on your site. Google’s use of the DART cookie enables it to serve ads to your users based on their visit to your sites and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
            </p>

            <button
              className="c-button"
              onClick={() => toggle()}
              type="button"
            >
              {active
                ? 'Hide'
                : 'Show'
              }
            </button>

          </div>
        )}
      </Accordion>
    </div>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>

            <a
              className="o-heading-link"
              href="#toggle"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              What do we use your information for?
            </a>

            <p style={active ? styles.active : styles.inactive}>
              Any of the information we collect from you may be used in one of the following ways:
              To personalize your experience (your information helps us to better respond to your individual needs)
              To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)
            </p>

            <button
              className="c-button"
              onClick={() => toggle()}
              type="button"
            >
              {active
                ? 'Hide'
                : 'Show'
              }
            </button>

          </div>
        )}
      </Accordion>
    </div>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>

            <a
              className="o-heading-link"
              href="#toggle"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              How do we protect your information?
            </a>

            <p style={active ? styles.active : styles.inactive}>
              We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to?keep the information confidential.
            </p>

            <button
              className="c-button"
              onClick={() => toggle()}
              type="button"
            >
              {active
                ? 'Hide'
                : 'Show'
              }
            </button>
          </div>
        )}
      </Accordion>
    </div>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>

            <a
              className="o-heading-link"
              href="#toggle"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              Do we use cookies?
            </a>

            <p style={active ? styles.active : styles.inactive}>
              Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information
              We use cookies to compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.
            </p>

            <button
              className="c-button"
              onClick={() => toggle()}
              type="button"
            >
              {active
                ? 'Hide'
                : 'Show'
              }
            </button>

          </div>
        )}
      </Accordion>
    </div>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>

            <a
              className="o-heading-link"
              href="#toggle"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              Do we disclose any information to outside parties?
            </a>

            <p style={active ? styles.active : styles.inactive}>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
            </p>

            <button
              className="c-button"
              onClick={() => toggle()}
              type="button"
            >
              {active
                ? 'Hide'
                : 'Show'
              }
            </button>

          </div>
        )}
      </Accordion>
    </div>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>

            <a
              className="o-heading-link"
              href="#toggle"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              Third party links
            </a>

            <p style={active ? styles.active : styles.inactive}>
              Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
            </p>

            <button
              className="c-button"
              onClick={() => toggle()}
              type="button"
            >
              {active
                ? 'Hide'
                : 'Show'
              }
            </button>

          </div>
        )}
      </Accordion>
    </div>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>

            <a
              className="o-heading-link"
              href="#toggle"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              California Online Privacy Protection Act Compliance
            </a>

            <p style={active ? styles.active : styles.inactive}>
              Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.
              As part of the California Online Privacy Protection Act, all users of our site may make any changes to their information at anytime by logging into their control panel and going to the ‘Edit Profile’ page.
            </p>

            <button
              className="c-button"
              onClick={() => toggle()}
              type="button"
            >
              {active
                ? 'Hide'
                : 'Show'
              }
            </button>
          </div>
        )}
      </Accordion>
    </div>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>

            <a
              className="o-heading-link"
              href="#toggle"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              Childrens Online Privacy Protection Act Compliance
            </a>

            <p style={active ? styles.active : styles.inactive}>
              We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.
            </p>

            <button
              className="c-button"
              onClick={() => toggle()}
              type="button"
            >
              {active
                ? 'Hide'
                : 'Show'
              }
            </button>

          </div>
        )}
      </Accordion>
    </div>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>

            <a
              className="o-heading-link"
              href="#toggle"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              Regional Tracking
            </a>

            <p style={active ? styles.active : styles.inactive}>
              We anonymously track city locations to help better provide statistics for localized school boards on how our services benefits their area and how often it is resourced.
              web@loufreyinstitute.org
            </p>

            <button
              className="c-button"
              onClick={() => toggle()}
              type="button"
            >
              {active
                ? 'Hide'
                : 'Show'
              }
            </button>
          </div>
        )}
      </Accordion>
    </div>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>

            <a
              className="o-heading-link"
              href="#toggle"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              Online Privacy Policy Only
            </a>

            <p style={active ? styles.active : styles.inactive}>
              This online privacy policy applies only to information collected through our website and not to information collected offline.
            </p>

            <button
              className="c-button"
              onClick={() => toggle()}
              type="button"
            >
              {active
                ? 'Hide'
                : 'Show'
              }
            </button>
          </div>
        )}
      </Accordion>
    </div>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>
            <a
              className="o-heading-link"
              href="#toggle"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              Terms and Conditions
            </a>

            <p style={active ? styles.active : styles.inactive}>
              Please also visit our <Link to="terms">Terms and Conditions</Link> section establishing the use, disclaimers, and limitations of liability governing the use of our website at
              Terms and Conditions
              Your Consent
              By using our site, you consent to our privacy policy.
              Changes to our Privacy Policy
              If we decide to change our privacy policy, we will post those changes on this page.
              Contacting Us
              If there are any questions regarding this privacy policy you may contact us using the
              information below.
            </p>
              <p style={active ? styles.active : styles.inactive} className="u-text-- u-mt">Subject to change without notice at any time.</p>
              <ul style={active ? styles.active : styles.inactive}>
                <li>LouFreyInstitute.org</li>
                <li>12443 Research Parkway OTC3 Suite 406</li>
                <li>Orlando, Florida 32826 USA </li>
                <li>web@loufreyinstitute.org</li>
                <li>(407)823-0813</li>
              </ul>
            <button
              className="c-button"
              onClick={() => toggle()}
              type="button"
            >
              {active
                ? 'Hide'
                : 'Show'
              }
            </button>
          </div>
        )}
      </Accordion>
    </div>

  </div>
);

export default PrivacyPolicy;
