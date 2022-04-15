import Avatar from "./icons/Avatar";
import "./ChatScreen.css";
import Send from "./icons/Send";
import IcionPaperclip from "./icons/IconPaperclip";
import { useState } from "react";
import Image from "./icons/Image";
import CameraReels from "./icons/CameraReels";
import Mic from "./icons/Mic";

// one message
function Message({message,own}){
    return(
        <p className={`chat_message ${own && "chat_reciever"}`}>{message}
            <span className="chat_message_timedate">00:00</span>
        </p>
    )
}

//create list of message
function MessagesList ({messages}) {
    // sync the chat list in the sidebar with the user's friends.
    const messageList = messages.map((message, key) => {
        return <Message message={message.message} own={message.own} key={key} />;
    });
    return (
        <div className="chatsList">
            {messageList}
        </div>
    );
}

function ButtonBar(){
    return(
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary"><Image/></button>
            <button type="button" class="btn btn-secondary"><CameraReels/></button>
            <button type="button" class="btn btn-secondary"><Mic/></button>
        </div>
    )
}


function ChatScreen({user, messageList}){
    // load the page with the new massege list after click on contact
    const [message,setMessage,]=useState("");

    // send message
    const sendMessage=function(e){

    } 

    return(
        <div className="chatScreen">
            <div className="chat_header">
                <Avatar/>
                <div className="chat_headerinfo">NAME</div>
            </div>

            <div className="chat_body">
                <MessagesList messages={messageList}/>
            </div>

            <div className="chat_footer">
                <div className="chat_footer_from">
                    <button type="button" className="btn btn-outline-secondary btn-sm"><IcionPaperclip />Upload</button>
                    <input type="text" value={message} onChange={(e)=>sendMessage(e.target.value)} placeholder="New message here.."></input>
                    <button type="submit" onClick={sendMessage} className="btn btn-outline-secondary btn-sm"><Send />Send</button>
                </div>
            </div>
        </div>
    );
}

export default ChatScreen;