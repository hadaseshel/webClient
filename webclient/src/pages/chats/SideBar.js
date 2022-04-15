import React from "react";
import "./SideBar.css";
import { useState } from "react";
import Avatar from "./icons/Avatar";
import NewChat from "./NewChat";
import ChatListUpdate from "./ChatListUpdate";
import Users from "../../Users";


function SideBar({user,clickOnContact}) {

    const chats = user.friends;

    // load the page with the new chat list after adding a new chat.
    const [chatList, setChatList] = useState(chats);

    // update the chats list with the new contact
    const addChat = function(newContact) {
        // change the state of the chatList
        let newArray=[...chatList];
        newArray.push(newContact);
        setChatList(newArray);
        // add to the list of chat in the users Array
        chats.push(newContact);
        // add mySelf to the other list of friends
        Users[newContact.username].friends.push(user);
    }

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                {(user.image!==null)?<img id="userimag" src={user.image} />:<Avatar/>}
                <div className="sidebar_headerR">
                    <NewChat addChat={addChat} user={user}/>
                </div>
            </div>

            <div className="sidebar_chats">
                <ChatListUpdate chats={chatList} clickOnContact={clickOnContact}/>
            </div>

        </div>
    );
}


export default SideBar;

/*
<button type="button" className="btn btn-outline-secondary btn-sm"
                    data-bs-toggle="modal" data-bs-target="#newChatModal">
                        <AvatarPlusIcon />
                    </button>*/