import React from "react";
import "./SideBar.css";
import SideBarChat from "./SideBarChat.js";
import { useRef, useState } from "react";
import Avatar from "./icons/Avatar";
import AvatarPlusIcon from "./icons/AvatarPlusIcon";


function Image(){

}

function SideBar({user}) {

    // state to hendle error
    const [image, setImage] = useState("");
    /*
    if(user.image!=null){
        setImage("image");
    }*/
    const chats = user.friends;

    // sync the chat list in the sidebar with the user's friends.
    const chatList = chats.map((friend, key) => {
        return <SideBarChat nickname={friend.nickname} image={friend.image} chat={friend.chat} key={key} />;
    });
   
    return (
        <div className="sidebar">

            <div className="sidebar_header">
                {(image!="")?<Image/>:<Avatar/>}
                <div className="sidebar_headerR">
                    <button type="button" className="btn btn-outline-secondary btn-sm"><AvatarPlusIcon /></button>
                </div>
            </div>

            <div className="sidebar_chats">
                {chatList}
            </div>

        </div>
    )

}

export default SideBar;