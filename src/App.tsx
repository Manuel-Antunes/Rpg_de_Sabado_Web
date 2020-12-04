import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes/routes";
import GlobalStyle from "./styles/global";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store, persistor } from "./tsstore";
import history from "./services/history";

function App() {
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
}

export default App;
//tô voltando
