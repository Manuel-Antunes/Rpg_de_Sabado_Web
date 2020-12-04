import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Routes from './routes/routes';
import { store, persistor } from './tsstore';
import history from './services/history';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <ToastContainer />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
// tô voltando
