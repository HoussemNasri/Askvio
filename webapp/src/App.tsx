import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Button, Container} from "@mui/material";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

const theme = createTheme()

function App() {
    return (
        <div className="App">
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Router>
                    <Nav/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </Router>
            </Box>
        </div>
    );
}

export default App;
