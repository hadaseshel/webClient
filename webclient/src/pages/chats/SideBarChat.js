import React from "react";
import "./SideBarChat.css";
import Avatar from "./icons/Avatar";

function SideBarChat({nickname, image, chat}) {
    return (
        <div className="sidebar_chat">
            <div className="sidechat_info">
                <div className="friendImage">
                    <Avatar/>
                </div>
                <div className="info">
                    <h2>{nickname}</h2>
                    <p>Last message...</p>
                </div>
            </div>
        </div>
    );
}

export default SideBarChat;