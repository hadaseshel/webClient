import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
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
  const users = [{username: 'hadaseshel', password: '12ha', nikename: 'doosa'},
                  {username: 'hailzanbar', password: '34ha', nikename: 'hailosh'}]
                  
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