import React from 'react';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Auth from './components/Auth/Auth.jsx'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route } from 'react-router-dom';

const App = () => {
    const { isAuthenticated } = useAuth0();
    return (<div>
        <Routes>
            <Route index path="/" element={<Auth />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        {isAuthenticated && <Navbar />}
    </div>)
}

export default App;