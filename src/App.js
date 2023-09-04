import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './components/Login';
import WorkSpace from './components/WorkSpace';
import theme from "./themes";
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/workspace" element={<WorkSpace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
