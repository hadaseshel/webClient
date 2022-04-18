import Avatar from "./icons/Avatar";
import "./ChatScreen.css";
import Send from "./icons/Send";
import { useRef, useState } from "react";
import UploadImage from "./upload/UploadImage";
import UploadVideo from "./upload/UploadVideo"
import UploadAudio from "./upload/UploadAudio"
import Users from '../../Users';

// one message
function Message({message,own}){
    return(
        <p className={`chat_message ${(own!="me")?"chat_reciever":""}`}>{message}
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
        <div className="messageList">
            {messageList}
        </div>
    );
}

function ChatScreen({usernameinlogin, username, nickname,image, messageList,createScreen}){
    // load the page with the new massege list after click on contact
    const [message,setMessage]=useState(messageList);



    // send message
    //const sendMessage=function(e){
    //} 
    const massege=useRef();

    // need to take care on the rander
    const send = function(){
        let newArray;
        //need to take care of push to the list by the proper chat contact
        for(let i=0; i<Users[usernameinlogin].friends.length;i++){
            console.log(Users[usernameinlogin].friends[i].username);
            if (Users[usernameinlogin].friends[i].username===username){
                Users[usernameinlogin].friends[i].chat.push({message: massege.current.value, own: "me"});
                newArray=[...Users[usernameinlogin].friends[i].chat];
                setMessage(newArray);
                break;
            }
        }
        // add the chat in the list of the friends
        for(let i=0; i<Users[username].friends.length;i++){
            console.log(Users[usernameinlogin].friends[i].username);
            if (Users[username].friends[i].username===usernameinlogin){
                Users[username].friends[i].chat.push({message: massege.current.value, own: "not me"});
                break;
            }
        }
        console.log(Users);
        const newChatScreen = <ChatScreen usernameinlogin={usernameinlogin} username={username} nickname={nickname} image={image} messageList={newArray} createScreen={createScreen}/>;
        createScreen(newChatScreen);
    }

    return(
        <div className="chatScreen">
            <div className="chat_header">
            {(image!==null)?<img id="userimag" src={image} />:<Avatar/>}
                <div className="chat_headerinfo">{nickname}</div>
            </div>

            <div className="chat_body">
                <MessagesList messages={messageList}/>
            </div>

            <div className="chat_footer">
                <div className="chat_footer_from">
                    {/*<button type="button" className="btn btn-outline-secondary btn-sm"><IcionPaperclip />Upload</button>*/}
                    <UploadImage/>
                    <UploadVideo/>
                    <UploadAudio/>
                    {/*<input type="text" value={message} onChange={(e)=>sendMessage(e.target.value)} placeholder="New message here.."></input>*/}
                    <input type="text" ref={massege} placeholder="New message here.."></input>
                    <button type="submit" onClick={send} className="btn btn-outline-secondary btn-sm"><Send />Send</button>
                </div>
            </div>
        </div>
    );
}

export default ChatScreen;