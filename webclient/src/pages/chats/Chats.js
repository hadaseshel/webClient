import React from 'react';
import "./Chats.css";
import SideBar from './SideBar';

// person is the object with the fields of the user (image, friends, nickname...).
export default function Chats({user}) {
  
  return(
    <div className="chats">
      <h1>Chats</h1>
      <div className="chats_body">
        <SideBar person={user} />
        {/*ChatScreen*/}
      </div>
    </div>
  );
}