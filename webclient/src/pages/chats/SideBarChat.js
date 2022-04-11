import React from "react";
import "./SideBarChat.css";

function SideBarChat({nickname, image, chat}) {
    return (
        <div className="sidebar_chat">
            <div className="sidechat_info">
                <h2>{nickname}</h2>
                <p>Last message...</p>
            </div>
        </div>
    );
}

export default SideBarChat;