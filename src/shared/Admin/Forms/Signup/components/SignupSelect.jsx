import React, { PropTypes } from 'react';

const SignupSelect = ({
  signupWithEmail,
  signupWithFacebook,
  signupWithGoogle,
}) => (
  <div>
    <div>
      <h1 classNamw="o-heading-main">Signup for civic health updates</h1>
    </div>

    <div className="o-wrapper o-wrapper--narrow" >
      <div className="c-panel" >
        <div className="c-panel__head" >
          <h1 className="c-panel__heading" >Signup for our mailer for updates</h1>
        </div>
        <div className="c-panel__content" >
          <div className="o-layout o-layout--center" >
            <div className="o-layout__item" >
              <ul className="o-list-bare" >
                <li>
                  <button
                    className="c-button c-button--facebook c-button--block"
                    onClick={signupWithFacebook}
                  >
                    Signup With Facebook
                  </button>
                </li>
                <li>
                  <button
                    className="c-button c-button--google c-button--block"
                    onClick={signupWithGoogle}
                  >
                    Signup With Google
                  </button>
                </li>
                <li>
                  <button
                    className="c-button c-button--primary c-button--block"
                    onClick={signupWithEmail}
                  >
                    Signup with Email
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SignupSelect.propTypes = {
  signupWithEmail: PropTypes.func,
  signupWithFacebook: PropTypes.func,
  signupWithGoogle: PropTypes.func,
};

export default SignupSelect;
