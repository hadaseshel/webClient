import React from "react";
import SideBarChat from "./SideBarChat.js";


export default function ChatListUpdate ( {chats, createScreen} ) {
    // sync the chat list in the sidebar with the user's friends.
    const chatList = chats.map((friend, key) => {
        return <SideBarChat nickname={friend.nickname} image={friend.image} chat={friend.chat} createScreen={createScreen} key={key}/>;
    });
    return (
        <div className="chatsList">
            {chatList}
        </div>
    );
}