import React from 'react';
import Login from "./pages/Login";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import ExploreCommunities from "./pages/ExploreCommunities";
import {useAppDispatch} from "./redux/app/hooks";
import {PrivateRoute} from "./router/PrivateRoute";
import Layout from "./components/Layout";

function App() {
    const dispatch = useAppDispatch()

    return (
        <div className="App">
                <Router>
                    <Layout>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/explore' element={<PrivateRoute><ExploreCommunities/></PrivateRoute>}></Route>
                        </Routes>
                    </Layout>
                </Router>
        </div>
    );
}

export default App;
