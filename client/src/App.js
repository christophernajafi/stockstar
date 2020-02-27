import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Routes from "./components/routes/Routes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
