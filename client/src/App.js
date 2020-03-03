import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Routes from "./components/routes/Routes";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Routes />
        </Fragment>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
