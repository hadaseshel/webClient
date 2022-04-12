import React from "react";
import SideBarChat from "./SideBarChat.js";


export default function ChatListUpdate ( {chats} ) {

    console.log("at chat list update 2");
    console.log(chats);

    // sync the chat list in the sidebar with the user's friends.
    const chatList = chats.map((friend, key) => {
        return <SideBarChat nickname={friend.nickname} image={friend.image} chat={friend.chat} key={key} />;
    });

    //console.log("at chat list update 2");
    return (
        <div className="chatsList">
            {chatList}
        </div>
    );
}