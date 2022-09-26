import React from 'react';
import UserList from './components/UserList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/app.css'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<UserList />} />
                <Route exact path='add' element={<AddUser />} />
                <Route exact path='edit/:id' element={<EditUser />} />
            </Routes>
        </BrowserRouter>
    );
}