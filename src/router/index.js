import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { history } from '../history';
import Home from '../pages/Home';
import ToDo from '../pages/ToDoList';

const AppRouter = () => {
    return (
        <Router history={history}>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/todo' element={<ToDo />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
