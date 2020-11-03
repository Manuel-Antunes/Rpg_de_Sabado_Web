import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
//tô voltando
