import React from 'react';

const styles = {
  active: {
    display: 'inherit',
  },
  inactive: {
    display: 'none',
  },
};

class Accordion extends React.Component {

  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const stateStyle = this.state.active ? styles.active : styles.inactive;
    return (
      <section>
        <a onClick={this.toggle}>
          AASDFASDF
        </a>
        <p style={stateStyle}>
          Some content
        </p>
      </section>
    );
  }
}

export default Accordion
