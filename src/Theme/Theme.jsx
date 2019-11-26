import React from 'react';
import { ThemeProvider } from 'styled-components';

const Theme = ({ children, ...props }) => (
  <ThemeProvider {...props}>{children}</ThemeProvider>
);

Theme.defaultProps = {
  theme: {
    palettePink: '#ff2e63'
  }
};

export default Theme;
