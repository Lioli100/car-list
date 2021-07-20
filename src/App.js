import React from "react";
import Routes from "./routes";
import ToastProvider from "./components/toast";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </Router>
  );
};

export default App;
