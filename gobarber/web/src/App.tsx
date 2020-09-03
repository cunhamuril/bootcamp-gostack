import React from 'react';

import { SignIn } from './pages';
import { ToastContainer } from './components';
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
