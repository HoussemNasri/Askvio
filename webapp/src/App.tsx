import React from 'react';
import Login from "./pages/Login";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ExploreCommunities from "./pages/ExploreCommunities";
import {useAppDispatch} from "./redux/app/hooks";
import {PrivateRoute} from "./router/PrivateRoute";
import Layout from "./components/Layout";
import Page404 from "./pages/Page404";
import QuestionPost from "./pages/QuestionPost";

function App() {
    const dispatch = useAppDispatch()

    return (
        <div className="App">
                <Router>
                    <Layout>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/questions/:questionId/*' element={<QuestionPost/>}></Route>
                            <Route path='*' element={<Page404/>} />
                        </Routes>
                    </Layout>
                </Router>
        </div>
    );
}

export default App;
