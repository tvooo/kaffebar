import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';

export const Root = ({children, ...props}) => (
  <ThemeProvider theme={theme}>
  <div>
      {children}
  </div>
</ThemeProvider>
)
