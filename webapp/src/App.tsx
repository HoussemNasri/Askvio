import React from 'react';
import Login from "./pages/Login";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ExploreCommunities from "./pages/ExploreCommunities";
import {useAppDispatch} from "./redux/app/hooks";
import {PrivateRoute} from "./router/PrivateRoute";
import Layout from "./components/Layout";
import PageNotFound from "./pages/PageNotFound";

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
                            <Route path='*' element={<PageNotFound/>} />
                        </Routes>
                    </Layout>
                </Router>
        </div>
    );
}

export default App;
