// src/App.jsx
import React from 'react';
import StarBackground from './components/StarBackground';
import { Container, Typography } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
  );
};

export default App;
