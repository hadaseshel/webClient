import React from "react";
import "./SideBarChat.css";
import Avatar from "./icons/Avatar";

function SideBarChat({nickname, image, chat,clickOnContact}) {
    return (
        <div className="sidebar_chat" onClick={clickOnContact(chat)}>
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