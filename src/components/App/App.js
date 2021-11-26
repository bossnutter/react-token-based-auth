import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
import Login from "../Login/Login";

function getToken() {
    const stringToken = sessionStorage.getItem('token');
    const userToken = JSON.parse(stringToken);
    return userToken.token

}

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function App() {
    const token = getToken();

    if (!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/preferences" element={<Preferences/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
