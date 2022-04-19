import React from 'react';
import "./Chats.css";
import SideBar from './SideBar';
import { useLocation } from 'react-router-dom';
import ChatScreen from "./ChatScreen.js";
import Users from '../../Users';
import { useState } from "react";

function ErrorChat(){
  return(
    // need to wirte here the right text
    <div className="alert" role="alert">
      You need to login. 
      </div>
  );
}


// person is the object with the fields of the user (image, friends, nickname...).
function Chats({}) {
  // loaction
  const location= useLocation();

  // the chat screen that will appear right the sidebar
  const[chatScreen, setChatScreen] = useState(null);
  const createChatScreen = function(newScreen) {
    setChatScreen(newScreen);
  }

  if (location.state==null){
    console.log("in error you need to log in:");
    console.log(Users);
    return(<ErrorChat/>);
  }

  return(
    <div className="chats">
      <div className="chats_body">
        <SideBar user={location.state} createScreen={createChatScreen} />
        {(chatScreen !== null)? chatScreen:null}
      </div>
    </div>
  );
}

export default Chats;