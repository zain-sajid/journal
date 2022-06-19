import React from 'react';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Auth from './components/Auth/Auth.jsx';
import Stats from './components/Stats/Stats.jsx';
import CreatePost from './components/CreatePost.jsx';
import Post from './components/Post.jsx';
import Settings from './components/Settings/Settings.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import Info from './components/Info/Info.jsx';

// const login   = window.open('https://identity.deso.org/log-in');
// const signUp  = window.open('https://identity.deso.org/sign-up');
// const logout  = window.open('https://identity.deso.org/logout?publicKey=BC123...');
// const approve = window.open('https://identity.deso.org/approve?tx=0abf35a...');
// window.addEventListener("message", (event) => this.handleMessage(event));

// // Can be added to any path for testnet deso and bitcoin addresses
// const testnet = window.open('https://identity.deso.org/log-in?testnet=true');

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      {location.pathname !== '/' && <Navbar />}
    </div>
  );
};

export default App;
