import React, { useState } from "react";
import "./SideBarChat.css";
import Avatar from "./icons/Avatar";
import ChatScreen from "./ChatScreen";

function SideBarChat({usernameinlogin, username, nickname, image, chat, createScreen}) {

    // render this sidebar chat when a new message is sended, in order to update the "last message"
    const [updChat, setUpdChat] = useState(chat);

    const updateTheChat = function(updateChat) {
        console.log("in setUpdateChat");
        setUpdChat(updateChat);
    }

    // function that insert the chat screen when we click on a sidebar chat to the function "setChatScreen" in chats.js
    const clickOnChat = function() {
        const newChatScreen = <ChatScreen usernameinlogin={usernameinlogin} username={username} nickname={nickname}
                                            image={image} messageList={chat} createScreen={createScreen} updateLastM={updateTheChat}/>;
        createScreen(newChatScreen);
    }


    return (
        <div className="sidebar_chat" onClick={clickOnChat}>
            <div className="sidechat_info">
                <div className="friendImage">
                    {(image!==null)?<img id="userimag" src={image} />:<Avatar/>}
                </div>
                <div className="info">
                    <h3>{nickname}</h3>
                    {(chat.length===0)?"":
                    <div className="last_message">{(updChat[updChat.length - 1].own=="me")?"me":(nickname)}:
                                                    {" " + updChat[updChat.length - 1].message}<span className="last_message_timedate">
                                                    {updChat[updChat.length - 1].time}</span>
                    </div>}
                </div>
            </div>
        </div>
        
    );
}

export default SideBarChat;