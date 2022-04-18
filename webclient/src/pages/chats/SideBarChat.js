import React from "react";
import "./SideBarChat.css";
import Avatar from "./icons/Avatar";
import ChatScreen from "./ChatScreen";

function SideBarChat({usernameinlogin, username, nickname, image, chat, createScreen}) {

    // function that insert the chat screen when we click on a sidebar chat to the function "setChatScreen" in chats.js
    const clickOnChat = function() {
        const newChatScreen = <ChatScreen usernameinlogin={usernameinlogin} username={username} nickname={nickname} image={image} messageList={chat} createScreen={createScreen}/>;
        createScreen(newChatScreen);
    }

    return (
        <div className="sidebar_chat" onClick={clickOnChat}>
            <div className="sidechat_info">
                <div className="friendImage">
                    {(image!==null)?<img id="userimag" src={image} />:<Avatar/>}
                </div>
                <div className="info">
                    <h3>{nickname} 
                        <span className="last_message_timedate">00:00</span>
                    </h3>
                    <p>Last message...</p>
                </div>
            </div>
        </div>
        
    );
}

export default SideBarChat;