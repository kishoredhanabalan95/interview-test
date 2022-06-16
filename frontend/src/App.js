import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import React, { useState } from 'react';

import './App.css';
import LoginComponent from './Components/Login/Login';
import HomeComponent from './Components/Home/Home';
import NotFound from "./Helpers/RouteGaurds/NotFound";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  const authenticateLogin = () => {
    userHasAuthenticated(true);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="login" element={<LoginComponent authenticateLogin={authenticateLogin} />} />
          <Route path="home" element={isAuthenticated ? <HomeComponent /> : <Navigate replace to="/login" />} />
          <Route path="about" element={isAuthenticated ? <HomeComponent /> : <Navigate replace to="/login" />} />
          <Route path="contact" element={isAuthenticated ? <HomeComponent /> : <Navigate replace to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
