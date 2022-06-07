import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.js';
import GlobalStyles from './styles/GlobalStyles.js';
import theme from './styles/theme.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
);
