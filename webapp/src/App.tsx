import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Button, Container} from "@mui/material";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme()

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Router>
                        <Nav/>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </Router>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default App;
