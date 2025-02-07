import React from 'react';
import { HashRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <HashRouter>
      <LandingPage />
    </HashRouter>
  );
}

export default App;
