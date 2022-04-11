import React from 'react';
import "./Chats.css";
import SideBar from './SideBar';
import { useLocation } from 'react-router-dom';
import ChatScreen from "./ChatScreen.js";
import Users from '../../Users';

function ErrorChat(){
  return(
    // need to wirte here the right text
    <div className="alert" role="alert">
      You need to login. 
      </div>
  );
}


// person is the object with the fields of the user (image, friends, nickname...).
export default function Chats({}) {

  // debug
  console.log(Users);

  // loaction
  const location= useLocation();
  
  if (location.state==null){
    return(<ErrorChat/>);
  }
  
  return(
    <div className="chats">
      <div className="chats_body">
        <SideBar user={location.state}/>
        <ChatScreen/>
      </div>
    </div>
  );
}