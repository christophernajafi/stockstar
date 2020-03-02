import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/navbar/Navbar";
import Routes from "./components/routes/Routes";
import "./App.css";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Routes />
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
