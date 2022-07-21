import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from '../Features/AddUser';
import UserView from '../Features/UserView';
import Navbar from '../Layouts/Navbar';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

const Index = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
                <Route path='/add-user' element={<AddUser/>}></Route>
                <Route path='/show-users' element={<UserView/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Index;