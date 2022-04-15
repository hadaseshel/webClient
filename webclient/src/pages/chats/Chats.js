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
  
  //creat state into make the componenet of body of ChatScreen to show the relevant chat by the contact click on
  const [messageList, setMessageList] = useState([{message: "hey, how are you?", own: "me"},{message: "I am good, how are you?", own: "not me"}]);

  // it doenst work well - this function is into 
  const clickOnContact = function(chat){
    console.log(chat);
    //let newArray=[...chat];
    //setMessageList(newArray);
    console.log("on click");
  }

  if (location.state==null){
    return(<ErrorChat/>);
  }

  return(
    <div className="chats">
      <div className="chats_body">
        <SideBar user={location.state} clickOnContact={clickOnContact}/>
        <ChatScreen user={location.state} messageList={messageList}/>
      </div>
    </div>
  );
}

export default Chats;