import PropTypes from 'prop-types';
import React from 'react';
import {
  defaultTheme,
  GlobalStyles,
  WolfsharkThemeProvider as MakoThemeProvider,
} from 'react-mako';

const App = (props) => {
  const {
    children,
  } = props;

  return (
    <MakoThemeProvider theme={defaultTheme}>
      <GlobalStyles>
        {children}
      </GlobalStyles>
    </MakoThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
