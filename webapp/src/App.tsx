import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Button, Container} from "@mui/material";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme()

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Nav/>
                    <main>
                        <Login/>
                    </main>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default App;
