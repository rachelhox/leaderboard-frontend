import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { defaultTemplate } from '@src/styles';

const InnerApp = (props: any) => {
  const { pageProps, Component } = props;
  const muiTheme = createTheme(defaultTemplate);
  return (
    <ThemeProvider theme={muiTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default InnerApp;
