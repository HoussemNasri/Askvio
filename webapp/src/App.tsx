import React from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import ExploreCommunities from "./pages/ExploreCommunities";
import {useAppDispatch} from "./redux/app/hooks";
import {PrivateRoute} from "./router/PrivateRoute";
import Layout from "./components/Layout";

const theme = createTheme()

function App() {
    const dispatch = useAppDispatch()

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/explore' element={<PrivateRoute><ExploreCommunities/></PrivateRoute>}></Route>
                        </Routes>
                    </Layout>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
