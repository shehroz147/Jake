import Link from 'react-router/lib/Link';
import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <nav className="c-navbar">

          <div className="o-wrapper">

            <div className="o-flex-layout">


              <li className="o-flex-layout__item">
                <h1 className="o-heading-nav">Civic Health Index</h1>
              </li>
              <div className="o-flex-layout__item">
                <ul className="o-list-inline c-nav c-nav--right">


                  <li className="o-list-inline__item">
                    <Link
                      className="c-nav__link"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="o-list-inline__item">
                    <Link
                      className="c-nav__link"
                      to="/reports"
                    >
                      Reports
                    </Link>
                  </li>

                  <li className="o-list-inline__item">
                    <Link
                      className="c-nav__link"
                      to="/compare"
                    >
                      Compare
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

          </div>

        </nav>

        <div className="o-wrapper o-wrapper--main">

          {this.props.children}

        </div>
      </div>

    );
  }
}
