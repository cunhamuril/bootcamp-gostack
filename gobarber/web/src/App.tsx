import React from 'react';

import { SignIn } from './pages';
import AppProvider from './hooks';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
