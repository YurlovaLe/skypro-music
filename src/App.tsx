import React from 'react';

import { AppProvider } from './App.context.tsx';
import { AppRoutes } from './routes.tsx';
import { GlobalStyle } from './styles.tsx';

export function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <AppRoutes />
    </AppProvider>
  );
}
