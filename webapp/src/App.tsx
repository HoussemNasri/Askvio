import React from 'react';
import LoginPage from "./pages/LoginPage";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExploreCommunitiesPage from "./pages/ExploreCommunitiesPage";
import {useAppDispatch} from "./redux/app/hooks";
import {PrivateRoute} from "./router/PrivateRoute";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import QuestionPage from "./pages/QuestionPage";

function App() {
    const dispatch = useAppDispatch()

    return (
        <div className="App">
                <Router>
                    <Layout>
                        <Routes>
                            <Route path='/' element={<HomePage/>}/>
                            <Route path='/questions/:questionId/*' element={<QuestionPage/>}></Route>
                            <Route path='*' element={<NotFoundPage/>} />
                        </Routes>
                    </Layout>
                </Router>
        </div>
    );
}

export default App;
