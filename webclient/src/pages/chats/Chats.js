import React from 'react';
import "./Chats.css";
import SideBar from './SideBar';


export default function Chats() {
  
  return(
    <div className="chats">
      <h1>Chats</h1>
      <div className="chats_body">
        <SideBar />
        {/*ChatScreen*/}
      </div>
    </div>
  );
}