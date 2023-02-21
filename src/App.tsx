import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import store from "./redux";
import IronMan from "./pages/IronMan";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iron-man" element={<IronMan />} />
          <Route path="/search" element={<Search />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </Provider>
  );
}

export default App;
