import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import CreatePassword from "./pages/CreatePassword/CreatePassword"
import PasswordSuccess from "./pages/PasswordSuccess/PasswordSuccess"
import SignUpSuccess from "./pages/SignUpSuccess/SignUpSuccess"
import Logout from "./pages/Logout/Logout"

import  DataProvider  from "../src/context/authContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <ToastContainer />
        <Router>
          <Routes>
            
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reset-password" element={<ResetPassword/>} />
            <Route path="/create-password/:email" element={<CreatePassword/>} />
            <Route path="/password-success" element={<PasswordSuccess/>} />
            <Route path="/signup-success" element={<SignUpSuccess/>} />
            <Route path="/logout" element={<Logout/>} />
           
          </Routes>
        </Router>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;

