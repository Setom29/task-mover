import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Login';
import theme from "./themes";

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
