import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import './App.css';
import * as React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register'
import ForgotPassword from './components/LoginRegister/ForgetPassword';
import Send from "./components/Send/Send";
import SendTo from "./components/Send/SendTo";
import Settings from "./components/Settings /Settings";
import SendFinal from './components/Send/SendFinal';

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

          <Route path="/send" element={<Send />} />
          <Route path="sendTo" element={<SendTo />} />
          <Route path="sendFinal" element={<SendFinal />} />

          <Route path="settings" element={<Settings />} />

        </Routes>
      </Router>
    </div>

    // <div className="App">
    //   <Settings></Settings>
    // </div>

  );
}

export default App;