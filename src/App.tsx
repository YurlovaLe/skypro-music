import React from 'react';

import { AppProvider } from './App.context';
import { AppRoutes } from './routes';
import { GlobalStyle } from './styles';

export function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <AppRoutes />
    </AppProvider>
  );
}
