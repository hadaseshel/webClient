import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Chats from "./pages/chats/Chats";
import Regist from './pages/registration/Regist.js';
import Login from './pages/login/Login';

function App() {
  /* the const */
  const users = [{username: 'hadaseshel', password: '12ha', nickname: 'doosa', image: null, friends: null},
                  {username: 'hailzanbar', password: '34ha', nickname: 'hailosh', image: null, friends: null}]
                  
  return (
    <>
      <Routes>
        <Route path="/" element={<Login users={users}/>} />
        <Route path="/regist" element={<Regist users={users} />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </>
  );
}

export default App;