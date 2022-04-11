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
  const hadasFriends = [{nickname: 'hailoosh', image: null, chat: null},
                        {nickname: 'shiroosh', image: null, chat: null}]
  const users = {'hadaseshel': {password: '12ha', nickname: 'doosa', image: "hadasfoto.png", friends: hadasFriends},
                  'hailzanbar': {password: '34ha', nickname: 'hailosh', image: "hailfoto.jpeg", friends: []}};
                  
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