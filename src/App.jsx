import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactParent from "./components/pages/contact/contact-parent/Contact_Parent";
import AboutParent from "./components/pages/about/about-parent/About_Parent";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/auth/login/Login";
import Logout from "./components/pages/auth/logout/Logout";
import Register from "./components/pages/auth/register/Register";
import Layout from "./components/router/shared/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<AboutParent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactParent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
