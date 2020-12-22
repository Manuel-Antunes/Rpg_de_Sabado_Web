import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import GlobalStyle from './styles/global';
import Routes from './routes/routes';
import { store, persistor } from './tsstore';
import history from './services/history';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <Routes />
            <ToastContainer />
            <GlobalStyle />
          </BrowserRouter>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
// tô voltando
