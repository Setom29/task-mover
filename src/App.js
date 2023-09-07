import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useState} from 'react';
import Login from './components/Login';
import WorkSpace from './components/WorkSpace';
import theme from "./themes";
import {ThemeProvider} from '@mui/material';
import CardModal from "./components/cardModal/CardModal";

function App() {
    return (

        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/workspace" element={<WorkSpace/>}/>
                </Routes>
            </Router>
            <CardModal/>
        </ThemeProvider>

    );
}

export default App;
