import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return this.props.children(this.state.active, this.toggle);
  }
}

export default Accordion;
