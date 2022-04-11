import React from 'react';
import "./Chats.css";
import SideBar from './SideBar';
import { useLocation } from 'react-router-dom';


// person is the object with the fields of the user (image, friends, nickname...).
export default function Chats({}) {
  const location= useLocation();
  
  return(
    <div className="chats">
      <h1>Chats</h1>
      <div className="chats_body">
        <SideBar user={location.state}/>
        {/*ChatScreen*/}
      </div>
    </div>
  );
}