import React from 'react';
import Navigation from '../Navigation/component';

const App = (props) => {
  const { children } = props;

  return (
    <div>
      <Navigation />
      {children}
      <p>Footer Components</p>
    </div>
  );
};

export default App;
