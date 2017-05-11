import React from 'react';
import Accordion from '../../Accordion/components/Accordion';

const styles = {
  active: {
    display: 'inherit',
  },
  inactive: {
    display: 'none',
  },
};

const TermsConditions = () => (
  <div className="o-wrapper">

    <h1 className="o-heading-main">Terms and Conditions of Use of Lou Frey Institute (LFI)</h1>

    <div className="c-panel">
      <Accordion>
        {(active, toggle) => (
          <div>
            <h1 className="o-heading-sub">
              <a
                href="#toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                1 Acceptance The Use Of Lou Frey Institute Terms and Conditions
              </a>
            </h1>

            <p style={active ? styles.active : styles.inactive}>
              Your access to and use of LFI is subject exclusively to these Terms and Conditions. You will not use the Website for any purpose that is unlawful or prohibited by these Terms and Conditions. By using the Website you are fully accepting the terms, conditions and disclaimers contained in this notice. If you do not accept these Terms and Conditions you must immediately stop using the Website.
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
            <h1 className="o-heading-sub">
              <a
                href="#toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                2 Credit card details
              </a>
            </h1>

            <p style={active ? styles.active : styles.inactive}>
              LFI will never ask for Credit Card details and request that you do not enter it on any of the forms on LFI.
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
            <h1 className="o-heading-sub">
              <a
                href="#toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                3 Advice
              </a>
            </h1>

            <p style={active ? styles.active : styles.inactive}>
              The contents of LFI website do not constitute advice and should not be relied upon in making or refraining from making, any decision.
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
            <h1 className="o-heading-sub">
              <a
                href="#toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                4 Change of Use
              </a>
            </h1>

            <p style={active ? styles.active : styles.inactive}>
              LFI reserves the right to: 4.1 change or remove (temporarily or permanently) the Website or any part of it without notice and you confirm that LFI shall not be liable to you for any such change or removal and. 4.2 change these Terms and Conditions at any time, and your continued use of the Website following any changes shall be deemed to be your acceptance of such change.
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
            <h1 className="o-heading-sub">
              <a
                href="#toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                5 Links to Third Party Websites
              </a>
            </h1>

            <p style={active ? styles.active : styles.inactive}>
              LFI Website may include links to third party websites that are controlled and maintained by others. Any link to other websites is not an endorsement of such websites and you acknowledge and agree that we are not responsible for the content or availability of any such sites.
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
            <h1 className="o-heading-sub">
              <a
                href="#toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                6 Copyright
              </a>
            </h1>

            <p style={active ? styles.active : styles.inactive}>
              6.1 All copyright, trade marks and all other intellectual property rights in the Website and its content (including without limitation the Website design, text, graphics and all software and source codes connected with the Website) are owned by or licensed to LFI or otherwise used by LFI as permitted by law. 6.2 In accessing the Website you agree that you will access the content solely for your personal, non-commercial use. None of the content may be downloaded, copied, reproduced, transmitted, stored, sold or distributed without the prior written consent of the copyright holder. This excludes the downloading, copying and/or printing of pages of the Website for personal, non-commercial home use only.

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
            <h1 className="o-heading-sub">
              <a
                href="#toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                7 Disclaimers and Limitation of Liability
              </a>
            </h1>

            <p style={active ? styles.active : styles.inactive}>
              7.1 The Website is provided on an AS IS and AS AVAILABLE basis without any representation or endorsement made and without warranty of any kind whether express or implied, including but not limited to the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security and accuracy. 7.2 To the extent permitted by law, LFI will not be liable for any indirect or consequential loss or damage whatever (including without limitation loss of business, opportunity, data, profits) arising out of or in connection with the use of the Website. 7.3 LFI makes no warranty that the functionality of the Website will be uninterrupted or error free, that defects will be corrected or that the Website or the server that makes it available are free of viruses or anything else which may be harmful or destructive. 7.4 Nothing in these Terms and Conditions shall be construed so as to exclude or limit the liability of LFI for death or personal injury as a result of the negligence of LFI or that of its employees or agents.
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
            <h1 className="o-heading-sub">
              <a
                href="#toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                8 Indemnity
              </a>
            </h1>

            <p style={active ? styles.active : styles.inactive}>
              You agree to indemnify and hold LFI and its employees and agents harmless from and against all liabilities, legal fees, damages, losses, costs and other expenses in relation to any claims or actions brought against LFI arising out of any breach by you of these Terms and Conditions or other liabilities arising out of your use of this Website.
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
            <h1 className="o-heading-sub">
              <a
                href="#toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                9 Severance
              </a>
            </h1>

            <p style={active ? styles.active : styles.inactive}>
              If any of these Terms and Conditions should be determined to be invalid, illegal or unenforceable for any reason by any court of competent jurisdiction then such Term or Condition shall be severed and the remaining Terms and Conditions shall survive and remain in full force and effect and continue to be binding and enforceable.
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
            <h1 className="o-heading-sub">
              <a
                href="#toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                10 Governing Law
              </a>
            </h1>

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
            <h1 className="o-heading-sub">
              <a
                href="#toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                Terms and Conditions
              </a>
            </h1>

            <p style={active ? styles.active : styles.inactive}>
              These Terms and Conditions shall be governed by and construed in accordance with the law of USA and you hereby submit to the exclusive jurisdiction of the USA courts. for more information please email web@loufreyinstitute.org
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
  </div>
);

export default TermsConditions
