import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import './App.css';
import * as React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register'
import ForgotPassword from './components/LoginRegister/ForgetPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
