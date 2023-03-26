import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {useAppDispatch} from "./redux/app/hooks";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import QuestionPage from "./pages/QuestionPage";
import CommunityPage from "./pages/CommunityPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='questions/:questionId/*' element={<QuestionPage/>}></Route>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Route>
                    <Route path='/c/:communityName' element={<CommunityPage/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
